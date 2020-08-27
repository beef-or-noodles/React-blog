import React from 'react'
import './index.scss'
export default class Comment extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let show = this.props.show
        return (
            <div className='model'>
                <div className={['commentDialog animate__animated',show?'animate__fadeInUp':'animate__backOutDown'].join(' ')}>
                    <div className='commentHeader'>
                        <div>查看评论</div>
                        <div onClick={()=>this.props.click()} className="close iconfont icon-cuo"></div>
                    </div>
                    <div className='commment_box'>
                        内容
                    </div>
                </div>
            </div>
        )
    }
}