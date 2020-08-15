import React from 'react'
import Head from '../head/head'
import './layout.scss'
import store from '../../store/store'
import {loadData} from "../../store/actions/load-actions";
export default class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
            //滚动条到底部的条件
            if(Math.round(scrollTop+windowHeight)==scrollHeight){
                //写后台加载数据的函数
                console.log("到底了");
                store.dispatch(loadData(true))
                console.log('数据更新',store.getState().load);
            }
            if(scrollTop == 0){
                console.log("到头了");
                store.dispatch(loadData(false))
                console.log('数据更新',store.getState().load);
            }
        }
    }
    render(){
        return (
            <div>
                <Head></Head>
                <div className='layout'>
                    <div className="container layout_content">
                        <div className='layout_left'>
                            <div className='layout_nav'>
                                <nav>
                                    <a className="active" href="/">推荐</a>
                                    <a href="/">关注</a>
                                    <a href="/">热榜</a>
                                </nav>
                            </div>
                            <div>
                                {this.props.children}
                            </div>
                        </div>
                        <div className='layout_right'>
                            <div>123</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}