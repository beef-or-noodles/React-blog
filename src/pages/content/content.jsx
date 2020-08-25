import React from 'react'
import {withRouter} from "react-router";
import {articeInfo} from '../../request/api/publicApi'
import './index.scss'
class Content extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articleInfo:{}
        }
    }
    componentDidMount() {
        let articeId = this.props.match.params.id
        this.initData(articeId)
    }
    initData(id){
        articeInfo(id).then(data=>{
            this.setState({articleInfo:data})
        })
    }
    render(){
        let articleInfo = this.state.articleInfo
        return (
            <div className='articelInfo'>
                <h3 className='title'>{articleInfo.articeTitle}</h3>
                <div className='infoAuth'>
                    <div className='headpic'>
                        <img src="http://39.99.193.63:8889/1576740450955.png" alt="头像"/>
                    </div>
                    <div className='mesBox'>
                        <h5 className='name'>{articleInfo.author}</h5>
                        <p className='time'>发布时间：{articleInfo.strTime}</p>
                    </div>
                    <button className='attention'><i className='iconfont icon-ziyuan'></i>关注</button>
                </div>
                <div className='good'>{articleInfo.likeNumber}人赞同了该文章</div>
                <div dangerouslySetInnerHTML = {{ __html: articleInfo.content }} />
            </div>
        )
    }
}
export default withRouter(Content)