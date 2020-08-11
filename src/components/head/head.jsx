import React from 'react'
import './head.scss'
import Search from './search/search'
import HeadPhote from './head_photo/index'
import News from './news/news'
export default class Head extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messageShow:false,
            photoShow:false,
            messageNum:3,
        }
        this.messageClick = this.messageClick.bind(this)
        this.photoClick = this.photoClick.bind(this)
    }
    componentDidMount() {
        document.onclick = ()=>{
            this.setState({
                messageShow:false,
                photoShow:false
            })
        }
    }

    messageClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            messageShow:true,
            photoShow:false,
            messageNum:0,
        })
    }
    photoClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            photoShow:true,
            messageShow:false
        })
    }
    render(){
        return(
            <div className='header'>
                <div className="container">
                    <div className='H_left'>
                        <div className='logo'>Ai-Lion</div>
                        <ul className="navList">
                            <li><a href='/'>首页</a></li>
                            <li className="active"> <a href='/'>小站杂项</a></li>
                            <li> <a href='/content/1'>大前端</a></li>
                            <li> <a href='/list/1'>学习计划</a></li>
                            <li> <a href='/comment'>留言板</a></li>
                        </ul>
                        <Search></Search>
                    </div>
                    <div className='H_right'>
                        <News messageNum={this.state.messageNum} isShow={this.state.messageShow} onChange={this.messageClick}></News>
                        <HeadPhote isShow={this.state.photoShow} onChange={this.photoClick}></HeadPhote>
                    </div>
                </div>
            </div>

        )
    }
}