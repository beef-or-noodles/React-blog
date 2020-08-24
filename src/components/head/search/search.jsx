import React from 'react'
import './search.scss'
import {withRouter} from "react-router";
import store from "../../../store/store";
import {setWd,deleteWd,empytWd} from "../../../store/actions/userInfo-actions";

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
            {
                !!props.list.length&&<div className='H_history'>
                    <div className="S_top">
                        搜索历史
                        <span onClick={()=>props.empyt()}><i className='iconfont icon-shanchu'></i>清空</span>
                    </div>
                    <ul>
                        {
                            props.list.map((item,index)=>{
                                return <li key={index}>{item}<i onClick={()=>props.delete(item)} className='iconfont icon-cuo'></i></li>
                            })
                        }
                    </ul>
                </div>
            }

        </div>
    )
}
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            wdList:[]
        }
        this.search = this.search.bind(this)
        this.enterKey = this.enterKey.bind(this)
        this.delete_wd = this.delete_wd.bind(this)
        this.empyt = this.empyt.bind(this)
    }
    componentDidMount() {
        let wdList = store.getState().userInfo.wd
        this.setState({
            wdList
        })
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
    delete_wd(val){
        store.dispatch(deleteWd(val))
        setTimeout(()=>{
            let wdList = store.getState().userInfo.wd
            this.setState({
                wdList
            })
        },0)
    }
    empyt(){
        console.log('清空');
        store.dispatch(empytWd())
        this.setState({
            wdList:[]
        })
    }
    search(){
        let value = this.state.value
        if(value){
            this.setState((state)=>{
                return {
                    wdList:[...state.wdList,value]
                }
            })
            this.props.closeAll()
            store.dispatch(setWd(value))
            setTimeout(()=>{
                this.props.history.push({pathname:'/search',state:{wd:value}})
            },0)
        }

    }
    render(){
        let wdList = this.state.wdList
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
                {this.props.isShow&&<SearchBox empyt={this.empyt} delete={this.delete_wd} list={wdList}></SearchBox>}
            </div>
        )
    }
}
export default withRouter(Search)