import React from 'react'
import "animate.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
export default class Animate extends React.Component{
    render(){
        return (
            <ReactCSSTransitionGroup
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={2500}
                transitionLeaveTimeout={1500}
                transitionName="animated"
            >
                <div key="amache" className="animated fadeInLeftBig" >
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <div>{child}</div>;
                        })
                    }
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}