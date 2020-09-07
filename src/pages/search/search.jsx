import React from 'react'
import './search.scss'
import ListItem from '../../components/listItem/index'
import MyLoader from '../../components/loading/MyLoader/index'
import {withRouter} from 'react-router-dom'
import {searchArticle} from "../../request/api/publicApi";
import NoData from '../../components/noData/noData'
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((item,index) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={index} item={item}/>
    );
    return (
        <div>
            {!!numbers.length?listItems:<NoData></NoData>}
        </div>
    );
}

// 关键字高亮显示
function hightKeyWord(text,keyword){
    var find = text.split(keyword)
    let length = find.length
    let str = ''
    if (length == 1) return text
    for(let i in find){
        if(i<length-1){
            str+=`${find[i]}<span style="color:red;">${keyword}</span>`
        }
    }
    return str
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
                let list = [...data]
                let keyword = this.state.name
                list.forEach(item=>{
                    console.log(item['articeTitle'],keyword);
                    console.log(hightKeyWord(item['articeTitle'],keyword));
                    item['articeTitle'] = hightKeyWord(item['articeTitle'],keyword)
                    item['abstract'] = hightKeyWord(item['abstract'],keyword)
                })
                console.log(list);
                this.setState({
                        loading:false,
                        list:[...list]
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