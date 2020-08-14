import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style/public.css'
import './style/iconfont/iconfont.css'
import "animate.css";

import store from './store/store'
import {addToCart} from "./store/actions/cart-actions";
// 创建订阅函数
let unsubscribe = store.subscribe(()=>{
    console.log('数据',store.getState());
})
store.dispatch(addToCart('Coffe',1,500))
unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
