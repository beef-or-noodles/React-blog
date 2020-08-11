import React from 'react'
import './news.scss'
function MessageBox(){
    return (
        <div className='H_menu'>
            <div className='H_iconTop iconfont icon-sanjiaoshang'></div>
            <div className='H_n_top'>我的私信</div>
            <div className="H_n_content">
                <ul>
                    <li>
                        <div className='n_photo'>
                            <img src="http://www.ailion.cn/_nuxt/img/a79536b.jpg" alt="头像"/>
                        </div>
                        <div className='n_con'>
                            <div className='n_name'>知乎小伙伴<i className="iconfont icon-guanfang_icon"></i></div>
                            <div className='n_message'>
                                亲爱的知乎小伙伴：
                                你知道如何给你的小家做一份「家庭理财计划」吗？
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='H_n_footer'>
                <div className="H_n_f_left">
                    <i className="iconfont icon-icon_edit"></i>
                    <span>写私信</span>
                </div>
                <div className="H_n_f_right">
                    <span>查看全部私信</span>
                </div>
            </div>
        </div>
    )
}

export default class News extends React.Component{
    render(){
        return (
            <div className="H_news" onClick={this.props.onChange}>
                <div className="H_icon iconfont icon-xiaoxi"></div>
                {!!this.props.messageNum&&<div className='H_Num'>{this.props.messageNum}</div>}
                {this.props.isShow&&<MessageBox></MessageBox>}
            </div>
        )
    }
}