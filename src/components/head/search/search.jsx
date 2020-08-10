import React from 'react'
import './search.scss'
export default class Search extends React.Component{
    render(){
        return (
            <div className="search">
                <input placeholder='请输入搜索内容' type="text"/>
                <button className='btn iconfont icon-sousuo'></button>
            </div>
        )
    }
}