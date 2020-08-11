import React from 'react'
import './index.scss'
function MessageBox(){
    return (
        <div className='H_menu'>
            <div className='H_iconTop iconfont icon-sanjiaoshang'></div>
            <ul className="adjoint">
                <li><i className="iconfont icon-icon"></i>我的主页</li>
                <li><i className="iconfont icon-shezhi"></i>设置</li>
                <li><i className="iconfont icon-tuichu"></i>退出</li>
            </ul>
        </div>
    )
}

export default class HeadPhoto extends React.Component{
    render(){
        return (
            <div className='headphoto' onClick={this.props.onChange}>
                <div className='Img'>
                    <img src="http://www.ailion.cn/_nuxt/img/a79536b.jpg" alt="头像"/>
                </div>
                {this.props.isShow&&<MessageBox></MessageBox>}
            </div>
        )
    }
}