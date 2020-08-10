import React from 'react'
import './index.scss'
export default class HeadPhoto extends React.Component{
    render(){
        return (
            <div className='headphoto'>
                <div className='Img'>
                    <img src="http://www.ailion.cn/_nuxt/img/a79536b.jpg" alt="头像"/>
                </div>
                <div className='H_menu'>
                    <div className='H_iconTop'></div>
                    <ul className="adjoint">
                        <li><i></i>我的主页</li>
                        <li><i></i>设置</li>
                        <li><i></i>退出</li>
                    </ul>
                </div>
            </div>
        )
    }
}