import React,{Fragment} from 'react'
import './login.scss'
import store from "../../store/store";
import {postLogin} from '../../request/api/publicApi'
import {setUserInfo} from "../../store/actions/userInfo-actions";
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            passWord:'',
            islogin:false, // 是否必须登录
            info:{}
        }
        this.userChange = this.userChange.bind(this);
        this.pasChange = this.pasChange.bind(this);
        this.goLogin = this.goLogin.bind(this)
    }
    componentDidMount() {
        let info = store.getState().userInfo.info
        if(info.hasOwnProperty('id')){
            this.setState({
                islogin:false,
                info
            })
        }
    }
    userChange(event) {
       this.setState({userName: event.target.value});
    }
    pasChange(event){
        this.setState({passWord: event.target.value});
    }
    goLogin(){
        let {userName,passWord} = this.state
        postLogin({userName,passWord}).then(res=>{
            let {isLogin,data} = res
            if(isLogin){
                store.dispatch(setUserInfo(data[0]))
                this.setState({
                    islogin:false
                })
            }
        })
    }

    render(){
        return (
            <div>
                {this.state.islogin&&<div className='loginbg'>
                    <div className="box animate__animated animate__fadeInUp">
                        <p className='title'>Ai-Lion <button className="iconfont icon-cuo"></button></p>
                        <Fragment>
                            <div className="inputBox">
                                <div className="from-item">
                                    <div className='txt'>用户名</div>
                                    <input type="text"
                                           value={this.state.userName}
                                           placeholder='请输入用户名或邮箱'
                                           onChange={this.userChange}
                                    />
                                </div>
                                <div className="from-item">
                                    <div className='txt'>密码</div>
                                    <input type="password"
                                           value={this.state.passWord}
                                           placeholder='请输入密码'
                                           onChange={this.pasChange}
                                    />
                                </div>
                                <button className='btn' onClick={this.goLogin}>登录</button>
                            </div>
                        </Fragment>
                    </div>
                </div>}
            </div>
        )
    }
}
export default Login