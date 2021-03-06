import React from 'react'
import './head.scss'
import Search from './search/search'
import HeadPhote from './head_photo/index'
import News from './news/news'
import store from '../../store/store'
import {navChange,putChildIndex,putChildList} from "../../store/actions/nav-actions";
import {withRouter} from 'react-router-dom'
import {columnList} from "../../request/api/publicApi";
import {loadData} from "../../store/actions/load-actions";

// 头部导航
function NavList(props){
    const list = props.navList;
    let navIndex = props.headerNav
    let childIndex = store.getState().navData.childIndex
    const listItems = list.map((item,index) =>
        // 正确！key 应该在数组的上下文中被指定
        <li className={navIndex===index?'active':''}
            onClick={(e)=>props.navClick(e,item,index,1)}
            key={index}>
            {item.label}
            {!!item.children.length&&<i className='iconfont icon-tubiao-'></i>}
            {!!item.children.length&&<ul className='childBox'>
                {item.children.map((ls,ind)=>{
                     return <li className={ls.id===childIndex?'active':''} onClick={(e)=>{props.navClick(e,ls,index,2);props.childClick(e,item,ls)}} key={ind}>{ls.label}</li>
                })}
            </ul>}
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
            navList:[],
            info:{},
            isLogin: false
        }
        this.unsubscribe = null
        this.messageClick = this.messageClick.bind(this)
        this.photoClick = this.photoClick.bind(this)
        this.searchClick = this.searchClick.bind(this)
        this.navClick = this.navClick.bind(this)
        this.childClick = this.childClick.bind(this)
        this.closeAll = this.closeAll.bind(this)
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    componentDidMount() {
        this.getList()
        document.onclick = ()=>{
            this.closeAll()
        }
        this.unsubscribe = store.subscribe(() =>{
            let info = store.getState().userInfo.info
            let isLogin = false
            if(info.hasOwnProperty('id')){
                isLogin = true
            }
            this.setState({
                info: info,
                isLogin
            })
        })
        this.setState({
            headerNav:store.getState().navData.headerNav,
        })
    }
    closeAll(){
        this.setState({
            messageShow:false,
            photoShow:false,
            searchShow:false,
        })
    }
    getList(){
        columnList({type:2}).then(data=>{
            let list = data
            list.unshift({
                label:'首页',
                id:'',
                children:[]
            })
            this.setState({
                navList:data
            })
        })
    }
    navClick(e,item,index,type=1){
        e.stopPropagation();
        if(item.href){
            window.open(item.href)
            return
        }

        if(type === 1){
            store.dispatch(putChildList([]))
            store.dispatch(putChildIndex(0))
            if(!!item.children.length)return
        }
        store.dispatch(navChange(index))
        this.setState({
            headerNav:index
        })
        this.props.history.push(`/home/${item.id}`)
    }
    childClick(e,item,ls){
        e.stopPropagation()
        if (!!ls.href) return
        store.dispatch(putChildIndex(ls.id))
        store.dispatch(putChildList(item.children))
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
                            <div className='logo'>Ai-Lion</div>
                            <NavList childClick={this.childClick} navClick={this.navClick} navList={this.state.navList} headerNav={this.state.headerNav}></NavList>
                        </div>
                        <div className='H_right'>
                            <Search closeAll={this.closeAll} onChange={this.searchClick} isShow={this.state.searchShow}></Search>
                            <News messageNum={this.state.messageNum} isShow={this.state.messageShow} onChange={this.messageClick}></News>
                            <HeadPhote isLogin={this.state.isLogin} info={this.state.info} isShow={this.state.photoShow} onChange={this.photoClick}></HeadPhote>
                        </div>
                    </div>
            </div>

        )
    }
}
export default withRouter(Head)