import React from 'react'
import './home.scss'
import ListItem from '../../components/listItem/index'
import MyLoader from '../../components/loading/MyLoader/index'
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 正确！key 应该在数组的上下文中被指定
        <ListItem key={number.toString()}/>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}
export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            list:[]
        }
        this.add = this.add.bind(this)
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({loading:false,list:[1]})
        },1000)
    }
    componentWillUnmount() {
        console.log("销毁");
    }

    add(){
        this.setState({loading:true})
        setTimeout(()=>{
            let list = this.state.list
            list.push(...[2])
            this.setState({loading:false,list:list})
        },1000)
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