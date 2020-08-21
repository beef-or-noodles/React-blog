import React from 'react'
import Head from '../head/head'
import './layout.scss'
import store from '../../store/store'
import {loadData} from "../../store/actions/load-actions";
import {withRouter} from "react-router";
import {putChildIndex} from "../../store/actions/nav-actions";
import CopyRight from '../right/copyRight/copyRight'
import Statistics from '../right/statistics/statistics'
import TagList from '../right/tagLIst/tagList'
import Recommend from '../right/recommend/recommend'
class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childList: [],
            childIndex: 0
        }
    }

    componentDidMount() {
        window.onscroll = function () {
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            //滚动条到底部的条件
            if (Math.round(scrollTop + windowHeight) === scrollHeight) {
                // 到底部 修改全局load属性
                store.dispatch(loadData(true))
            }
        }
        store.subscribe(() => {
            this.init()
        })
        this.init()
    }

    init() {
        let navData = store.getState().navData
        let index = this.state.childIndex
        if (index === navData.childIndex) return
        this.setState({
            childIndex: navData.childIndex,
            childList: navData.childList
        })
    }

    navClick(e, item) {
        store.dispatch(putChildIndex(item.id))
        this.props.history.push(`/home/${item.id}`)
    }

    render() {
        let childList = this.state.childList
        let index = this.state.childIndex
        return (
            <div>
                <Head></Head>
                <div className='layout'>
                    <div className="container layout_content">
                        <div className='layout_left'>
                            <div className='layout_nav'>
                                <nav>
                                    {
                                        childList.map(item => {
                                            return <span onClick={(e) => {
                                                this.navClick(e, item)
                                            }} key={item.id}
                                                         className={index === item.id ? 'active' : ''}>{item.label}</span>
                                        })
                                    }
                                </nav>
                            </div>
                            <div>
                                {this.props.children}
                            </div>
                        </div>
                        <div className='layout_right'>
                            <div className='rightBox'>
                                <div className='title'>小站统计</div>
                                <Statistics></Statistics>
                            </div>
                            <div className='rightBox'>
                                <div className='title'><i className='iconfont icon-recommend'></i>推荐文章</div>
                                <Recommend></Recommend>
                            </div>
                            <div className='rightBox'>
                                <div className='title'>标签云</div>
                                <TagList></TagList>
                            </div>
                            <div>
                                <CopyRight></CopyRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Layout)