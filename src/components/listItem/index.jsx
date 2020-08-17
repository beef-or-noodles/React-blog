import React from 'react'
import './index.scss'
export default class ListItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            check:false
        }
        this.change = this.change.bind(this)
    }
    change(){
        let check = this.state.check
        this.setState({
            check: !check
        })
    }
    render(){
        let item = this.props.item
        var imgUrl = ''
        if(item.imgurl){
            imgUrl = item.imgurl.split(',')[0]
        }
        let check = this.state.check
        return (
            <div className="ListItem">
                <h2 className='list_title'>
                    <p>{item.articeTitle}</p>
                </h2>
                {!check?<div className='animate__animated animate__fadeInDown'>
                    <div className='list_con'>
                        {imgUrl&&<div className='list_pic'>
                            <img src={imgUrl} alt={item.articeTitle}/>
                        </div>}
                        <div className='list_abs'>
                            <div className='list_abs_title'>
                                <p className='abs'>
                                    {item.abstract}
                                </p>
                            </div>
                            <p onClick={this.change} className="checkAll">阅读全文 <i className='iconfont icon-tubiao-'></i></p>
                        </div>
                    </div>
                </div>:<div className='con_html'>
                    <div dangerouslySetInnerHTML = {{ __html: item.content }} />
                </div>}
                <div className={['list_tool',check?'active animate__animated animate__fadeInUp':''].join(' ')}>
                    <button className='praise'>
                        <i className='iconfont icon-zan'></i>赞同 {item.clickNumber}
                    </button>
                    <button className='comment'>
                        <i className='iconfont icon-liuyan'></i>
                        {item.commentNum} 条评论
                    </button>
                    <button className='share'>
                        <i className='iconfont icon-fenxiang'></i>
                        分享
                    </button>
                    <button className='coolect'>
                        <i className='iconfont icon-shoucangxiao'></i>
                        收藏
                    </button>
                    {
                        check&&<button className='packup' onClick={this.change}>
                            <i className='iconfont icon-sanjiaoshang'></i>
                            收起
                        </button>
                    }

                </div>
            </div>
        )
    }
}