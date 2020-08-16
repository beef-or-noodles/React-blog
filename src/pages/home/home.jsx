import React from 'react'
import './home.scss'
import ListItem from '../../components/listItem/index'
import MyLoader from '../../components/loading/MyLoader/index'
import store from '../../store/store'
import {loadData} from "../../store/actions/load-actions";
import {withRouter} from 'react-router-dom'
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={index}/>
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
            list:[]
        }
        this.add = this.add.bind(this)
    }
    // 路由改变触发
    componentWillReceiveProps(){
        this.add()
    }
    componentDidMount() {
        this.setState({loading:false,list:[1,2,3,4,5]})
        // 通过subscribe可以监控数据变化，并返回unsubscribe
        store.subscribe(() =>{
            let load = store.getState().load
            if(load&&!this.state.loading){
                this.add()
            }
        })
    }
    componentWillUnmount() {
        console.log("销毁");
    }

    add(){
        this.setState({loading:true})
        setTimeout(()=>{
            let list = [...this.state.list]
            list.push(2)
            this.setState({loading:false,list:list})
        },2000)
        store.dispatch(loadData(false))
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