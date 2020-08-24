import React from 'react'
import './index.scss'
import {queryAllTag} from '../../../request/api/publicApi'
export default class tagList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount() {
        queryAllTag().then(data=>{
            this.setState({
                list:[...data]
            })
        })
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // 返回我们要的颜色
     getRandomColor() {
        var c1 = this.getRandom(100, 220);
        var c2 = this.getRandom(10, 220);
        var c3 = this.getRandom(100, 200);
        return 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')'
    }
    render(){
        let list = this.state.list
        return(
            <ul className='tagList'>
                {
                    list.map(item=>{
                       let bg = this.getRandomColor()
                       return <li style={{'backgroundColor':bg}} key={item.id}>{item.tag_name}</li>
                    })
                }

            </ul>
        )
    }
}