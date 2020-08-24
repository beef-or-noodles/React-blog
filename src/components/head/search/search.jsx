import React from 'react'
import './search.scss'
import {withRouter} from "react-router";
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
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
        this.search = this.search.bind(this)
        this.enterKey = this.enterKey.bind(this)
    }
    inputChange(e){
        this.setState({value: e.target.value});
    }
    enterKey(e){
        var evt = window.event || e;
        if (evt.keyCode === 13) {
            this.search()
        }
    }
    search(){
        let value = this.state.value
        if(value){
            this.props.closeAll()
            this.props.history.push({pathname:'/search',state:{wd:value}})
        }

    }
    render(){
        return (
            <div className="search" onClick={ this.props.onChange}>
                <input style={{width:this.props.isShow?230:160+'px'}}
                       placeholder='请输入搜索内容'
                       type="text"
                       value={this.state.value}
                       onChange={(e)=>this.inputChange(e)}
                       onKeyDown={(e)=>this.enterKey(e)}
            />
                <button onClick={()=>this.search()} className='btn iconfont icon-sousuo'></button>
                {this.props.isShow&&<SearchBox></SearchBox>}
            </div>
        )
    }
}
export default withRouter(Search)