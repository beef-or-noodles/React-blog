import React from 'react'
import './css/index.css'
import './js/script.js'

import img1 from './image/1.png'
import img2 from './image/2-1.png'
import img3 from './image/3.png'
import img4 from './image/4.png'
import img5 from './image/5.png'
import img6 from './image/6.png'

export default class Banner extends React.Component {
    render(){
        return(
            <div className="bili-banner" id="bilibanner">
                <div className="animated-banner">
                    <div className="layer">
                        <img src={img1} height="250" width="3000"/>
                    </div>
                    <div className="layer">
                        <img id="childIcon" src={img2} height="175" width="1800"/>
                    </div>
                    <div className="layer">
                        <img src={img3} height="250" width="3000"/>
                    </div>
                    <div className="layer">
                        <img src={img4} height="150" width="1800"/>
                    </div>
                    <div className="layer">
                        <img src={img5} height="165" width="1800"/>
                    </div>
                    <div className="layer">
                        <img src={img6} height="178" width="1950"/>
                    </div>
                </div>
            </div>
        )
    }
}