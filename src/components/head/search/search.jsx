import React from 'react'
import './search.scss'
function SearchBox(props) {
    return (
        <div className='searchBox animate__animated animate__bounceIn'>
            <div>
                <div className="S_top">小站热搜</div>
                <ul>
                    <li><a href="/">《以家之名》开播<i className='iconfont icon-remen'></i></a></li>
                    <li><a href="/">医学生偷麻药女友吸食致死<i className='iconfont icon-remen'></i></a></li>
                    <li><a href="/">黎巴嫩政府全体辞职<i className='iconfont icon-remen'></i></a></li>
                    <li><a href="/">猪肉价格上涨 85.7%<i className='iconfont icon-remen'></i></a></li>
                </ul>
            </div>
            <div className='H_history'>
                <div className="S_top">
                    搜索历史
                    <span><i className='iconfont icon-shanchu'></i>清空</span>
                </div>
                <ul>
                    <li><a href="/">《以家之名》开播</a><i className='iconfont icon-cuo'></i></li>
                    <li><a href="/">医学生偷麻药女友吸食致死</a><i className='iconfont icon-cuo'></i></li>
                </ul>
            </div>
        </div>
    )
}
export default class Search extends React.Component{
    render(){
        return (
            <div className="search" onClick={ this.props.onChange}>
                <input placeholder='请输入搜索内容' type="text"/>
                <button className='btn iconfont icon-sousuo'></button>
                {this.props.isShow&&<SearchBox></SearchBox>}
            </div>
        )
    }
}