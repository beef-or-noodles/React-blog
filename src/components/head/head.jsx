import React from 'react'
import './head.scss'
import Search from './search/search'
import HeadPhote from './head_photo/index'
export default class Head extends React.Component{
    render(){
        return(
            <div className='header'>
                <div className="container">
                    <div className='H_left'>
                        <div className='logo'>Ai-Lion</div>
                        <ul className="navList">
                            <li><a href='/'>首页</a></li>
                            <li className="active"> <a href='#'>小站杂项</a></li>
                            <li> <a href='#'>大前端</a></li>
                            <li> <a href='#'>学习计划</a></li>
                            <li> <a href='#'>留言板</a></li>
                        </ul>
                        <Search></Search>
                    </div>
                    <div className='H_right'>
                        <HeadPhote></HeadPhote>
                    </div>
                </div>
            </div>

        )
    }
}