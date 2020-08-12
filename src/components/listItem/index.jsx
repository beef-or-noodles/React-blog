import React from 'react'
import './index.scss'
export default class ListItem extends React.Component{
    render(){
        return (
            <div className="ListItem">
                <h2 className='list_title'>
                    <a href="/">为什么tiktok让扎克伯格如此恐慌？</a>
                </h2>
                <div className='list_con'>
                    <div className='list_pic'>
                        <img src="https://pic2.zhimg.com/50/v2-665ce75c50c6101f7153304cb571b9c5_400x224.jpg" alt=""/>
                    </div>
                    <div className='list_abs'>
                        <div className='list_abs_title'>
                            <p>
                                汽车之家： [汽车之家 车酷文话] 在国外谷仓或者车库中发现废弃豪车的新闻可谓屡见不鲜，但同样的事件在国内却相当少见，而这次的故事恰巧发生在广州。 近日
                                汽 车之家： [汽车之家 车酷文话] 在国外谷仓或者车库中发现废弃豪车的新闻可谓屡见不鲜，但同样的事件在国内却相当少见，而这次的故事恰巧发生在广州。 近日
                            </p>
                        </div>
                        <a href="/">阅读全文 <i className='iconfont icon-tubiao-'></i></a>
                    </div>
                </div>
                <div className='list_tool'></div>
            </div>
        )
    }
}