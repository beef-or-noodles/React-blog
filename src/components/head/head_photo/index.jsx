import React from 'react'
import './index.scss'
import usericon from './usericon.png'
import store from "../../../store/store";
import {setUserInfo} from "../../../store/actions/userInfo-actions";
function MessageBox(props){
    return (
        <div className='H_menu'>
            <div className='H_iconTop iconfont icon-sanjiaoshang'></div>
            <ul className="adjoint">
                <li><i className="iconfont icon-icon"></i>我的主页</li>
                <li><i className="iconfont icon-shezhi"></i>设置</li>
                <li onClick={props.exit}><i className="iconfont icon-tuichu"></i>退出</li>
            </ul>
        </div>
    )
}

export default class HeadPhoto extends React.Component{
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
    }
    exit(){
        store.dispatch(setUserInfo({}))
    }
    render(){
        return (
            <div className='headphoto' onClick={this.props.onChange}>
                <div className='Img'>
                    <img src={this.props.isLogin?this.props.info.image:usericon} alt="头像"/>
                </div>
                {this.props.isShow&&<MessageBox exit={this.exit}></MessageBox>}
            </div>
        )
    }
}