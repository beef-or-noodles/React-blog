import React from 'react'
import './index.scss'
export default class CopyRight extends React.Component {
    render(){
        return(
            <div className='copyRight'>
                <p>历史版本：</p>
                <p>vue：<a href="http://www.ailion.cn" target='_blank'>www.ailion.cn</a></p>
                <p>nuxt：<a href="http://nuxt.ailion.cn" target='_blank'>nuxt.ailion.cn</a></p>
                <p>react：<a href="http://react.ailion.cn" target='_blank'>react.ailion.cn</a></p>
                <p><a className="Footer-item" target="_blank" rel="noopener noreferrer"
                      href="https://zhuanlan.zhihu.com/p/28852607">侵权举报</a> &nbsp;&nbsp;·&nbsp;&nbsp;<a className="Footer-item" target="_blank" rel="noopener noreferrer"
                                                                                                        href="http://www.12377.cn">网上有害信息举报专区</a>
                </p>
                <p>
                    联系方式：QQ1570769179
                </p>
                <p><img src={require('./police.png')}></img>渝ICP备19006911号-1</p>
                <p>
                    Copyright 2018 by wuwanqiang
                </p>
            </div>

        )
    }
}