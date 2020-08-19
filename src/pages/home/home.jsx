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
                "columnId":'',
                "pageNo":1,
                "pageSize":5,
                "total":0,
                "type":1},
            list:[]
        }
    }
    componentDidUpdate(prevProps) {
        let oldId = prevProps.match.params.id
        let newId = this.props.match.params.id
        if (newId !== oldId){
            this.initData()
        }
    }

    componentDidMount() {
        this.initData()
        // 通过subscribe可以监控数据变化，并返回unsubscribe
        store.subscribe(() =>{
            let load = store.getState().load
            if(load&&!this.state.loading){
                this.getList()
                store.dispatch(loadData(false))
            }
        })
    }
    // 初始化数据
    initData(){
        let id = this.props.match.params.id || ''
        this.setState({
            loading:true,
            paging:{
                'columnId':id,
                "pageNo":1,
                "pageSize":5,
                "total":0,
                "type":1},
                list:[]
        },()=>{
            this.getList()
        })
    }
    getList(){
        let params = this.state.paging
        if((params.pageSize*params.pageNo > Math.ceil(params.total/10)*10)&&params.pageNo!=1){
            return
        }
        this.setState({loading:true})
        articleList(params).then(data=>{
            if(data.data){
                this.setState((state)=>{
                    let paging = {
                        ...state.paging,
                        pageNo:state.paging.pageNo+=1,
                        total:data.total
                    }
                    return {
                        loading:false,
                        paging:paging,
                        list:[...state.list,...data.data]
                    }
                })
            }

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