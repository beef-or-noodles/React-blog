import React from 'react'
import './head.scss'
import Search from './search/search'
import HeadPhote from './head_photo/index'
import News from './news/news'
import store from '../../store/store'
import {navChange} from "../../store/actions/nav-actions";
import {withRouter} from 'react-router-dom'
import {columnList} from "../../request/api/publicApi";

// 头部导航
function NavList(props){
    const list = props.navList;
    let navIndex = props.headerNav
    const listItems = list.map((item,index) =>
        // 正确！key 应该在数组的上下文中被指定
        <li className={navIndex===index?'active':''}
            onClick={()=>props.navClick(item,index)}
            key={index}>
            {item.label}
        </li>
    );
    return (
        <ul className="navList">
            {listItems}
        </ul>
    );
}
class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageShow:false,
            photoShow:false,
            searchShow:false,
            messageNum:3,
            headerNav:0,
            navList:[]
        }
        this.messageClick = this.messageClick.bind(this)
        this.photoClick = this.photoClick.bind(this)
        this.searchClick = this.searchClick.bind(this)
        this.navClick = this.navClick.bind(this)
    }
    componentDidMount() {
        this.getList()
        document.onclick = ()=>{
            this.setState({
                messageShow:false,
                photoShow:false,
                searchShow:false,
            })
        }
        this.setState({
            headerNav:store.getState().navIndex.headerNav
        })
    }
    getList(){
        columnList({type:2}).then(data=>{
            console.log(data);
            let list = data
            list.unshift({
                label:'首页',
                id:''
            })
            this.setState({
                navList:data
            })
        })
    }
    navClick(item,index){
        if(item.href){
            window.open(item.href)
            return
        }
        if(!item.children.length){
            store.dispatch(navChange(index))
            this.setState({
                headerNav:index
            })
            this.props.history.push(`/home/${item.id}`)
        }
    }
    messageClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            messageShow:true,
            photoShow:false,
            searchShow:false,
            messageNum:0
        })
    }
    searchClick(e){
        e.nativeEvent.stopImmediatePropagation()
            this.setState({
                searchShow:true,
                messageShow:false,
                photoShow:false,
            })
    }
    photoClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            photoShow:true,
            messageShow:false,
            searchShow:false,
        })
    }
    render(){
        return(
            <div className='header'>
                <div className="container">
                        <div className='H_left'>
                            <div className='logo' onClick={()=>{this.props.history.push(`/home`)}}>Ai-Lion</div>
                            <NavList navClick={this.navClick} navList={this.state.navList} headerNav={this.state.headerNav}></NavList>
                        </div>
                        <div className='H_right'>
                            <Search onChange={this.searchClick} isShow={this.state.searchShow}></Search>
                            <News messageNum={this.state.messageNum} isShow={this.state.messageShow} onChange={this.messageClick}></News>
                            <HeadPhote isShow={this.state.photoShow} onChange={this.photoClick}></HeadPhote>
                        </div>
                    </div>
            </div>

        )
    }
}
export default withRouter(Head)