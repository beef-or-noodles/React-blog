import React from 'react'
import Head from '../head/head'
import './layout.scss'
export default class Layout extends React.Component {
    constructor(props){
        super(props)
        this.downLoad = this.downLoad.bind(this)
        this.homeDom = React.createRef()
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    // 监听滚动条变化
    handleScroll=(event)=> {
        //滚动条高度
        let ctx = this;
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        let down = scrollHeight - (scrollTop + clientHeight)
        if(down === 0){
            ctx.downLoad()
            console.log("到底了");
        }
    }
    downLoad(){
        //this.homeDom.add()
        // console.log(this.props.children);
        // console.log(this.homeDom);
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
                            <div ref={this.homeDom}>
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