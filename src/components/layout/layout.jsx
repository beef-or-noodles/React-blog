import React from 'react'
import Head from '../head/head'
import './layout.scss'
export default class Layout extends React.Component {
    render(){
        return (
            <div>
                <Head></Head>
                <div className='layout'>
                    <div className="container">
                        <h1>layout</h1>
                    </div>
                </div>
            </div>
        )
    }
}