import React from 'react'
import './search.scss'
import ListItem from '../../components/listItem/index'
import MyLoader from '../../components/loading/MyLoader/index'
import {withRouter} from 'react-router-dom'
import {searchArticle} from "../../request/api/publicApi";
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
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            name:'',
            list:[]
        }
    }
    componentDidUpdate(prevProps) {
        let oldId = prevProps.location.state.wd
        let newId = this.props.location.state.wd
        if (newId !== oldId){
            this.initData()
        }
    }

    componentDidMount() {
        this.initData()
    }
    // 初始化数据
    initData(){
        let name = this.props.location.state.wd
        this.setState({
            loading:true,
            name,
            list:[]
        },()=>{
            this.getList()
        })
    }
    getList(){
        this.setState({loading:true})
        let name = this.state.name
        searchArticle(name).then(data=>{
            if(data){
                this.setState({
                        loading:false,
                        list:[...data]
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
export default withRouter(Search)