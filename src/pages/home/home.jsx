import React from 'react'
import './home.scss'
import ListItem from '../../components/listItem/index'
import MyLoader from '../../components/loading/MyLoader/index'
import store from '../../store/store'
import {loadData} from "../../store/actions/load-actions";
import {withRouter} from 'react-router-dom'
import {articleList} from "../../request/api/publicApi";
import axios from 'axios'
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item,index) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={index} item={item}/>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            paging:{
                "pageNo":1,
                "pageSize":5,
                "total":0,
                "type":1},
            list:[]
        }
    }
    componentDidMount() {
        this.initData()
        this.getList()
        // 通过subscribe可以监控数据变化，并返回unsubscribe
        store.subscribe(() =>{
            let load = store.getState().load
            if(load&&!this.state.loading){
                this.getList()
                store.dispatch(loadData(false))
            }
        })
        // 当前页面路由变化
        this.props.history.listen((data)=>{
            console.log("路由变化");
            this.initData()
            this.getList()
        })

    }
    // 初始化数据
    initData(){
        this.setState({
            loading:true,
            paging:{
                "pageNo":1,
                "pageSize":5,
                "total":0,
                "type":1},
            list:[]
        })
    }
    getList(){
        let params = this.state.paging
        if(Math.ceil(params.total/params.pageSize) == params.pageNo){
            console.log('到底了');
            return
        }
        this.setState({loading:true})
        articleList(params).then(data=>{
            console.log(data);
            this.setState((state)=>{
                return {
                    loading:false,
                    paging:{
                        ...state.paging,
                        pageNo:state.paging.pageNo++,
                        total:data.total
                    },
                    list:[...state.list,...data.data]
                }
            })
        })
    }
    render() {
        return (
            <div className="home">
                <NumberList numbers={this.state.list}></NumberList>
                {this.state.loading&&<MyLoader></MyLoader>}
            </div>
        )
    }
}
export default withRouter(Home)