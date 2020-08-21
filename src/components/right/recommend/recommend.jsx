import React from 'react'
import {queryRecommend} from "../../../request/api/publicApi";
import './index.scss'
export default class Recommend extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount() {
        queryRecommend().then(data=>{
            this.setState({
                list:[...data]
            })
        })
    }
    render(){
        let list = this.state.list
        return(
            <ul className='Recommend'>
                {
                    list.map(item=>{
                        return <li key={item.id}><a href='#'>{item.articeTitle}</a></li>
                    })
                }
            </ul>
        )
    }
}