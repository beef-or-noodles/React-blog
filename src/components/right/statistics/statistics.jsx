import React from 'react'
import './index.scss'
import {queryChart} from '../../../request/api/publicApi'
export default class Statistics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:{}
        }
    }
    componentDidMount() {
        let day = this.runDay()
        queryChart().then(data=>{
            this.setState({
                data:{day,...data.contentNum}
            })
        })
    }
    runDay(){
        var urodz= new Date("2019-04-01");
        var now = new Date();
        var ile = now.getTime() - urodz.getTime();
        var dni = Math.floor(ile / (1000 * 60 * 60 * 24));
        return dni
    }
    render(){
        let state = this.state.data
        return(
            <ul className="right_system">
                <li>
                    <p><i className='iconfont icon-zuozhe'></i>留言条数</p>
                    <div className='num'>{state.comments}条</div>
                </li>
                <li>

                    <p><i className='iconfont icon-wenzhang'></i>文章数量</p>
                    <div className='num'>{state.artice}篇</div>
                </li>
                <li>

                    <p><i className='iconfont icon-icon'></i>用户数量</p>
                    <div className='num'>{state.user}人</div>
                </li>
                <li>
                    <p> <i className='iconfont icon-shijian'></i>运行天数</p>
                    <div className='num'>{state.day}天</div>
                </li>
            </ul>
        )
    }
}