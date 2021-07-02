import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* import '@assets/styles/main.css' */
import '@assets/styles/main.less'; // 引入全局样式
import 'antd/dist/antd.css';  // 全局引入antd的样式
import '@assets/styles/normalize.css' ; //清除浏览器默认样式
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,  
} from 'react-router-dom'
import store from './store'
ReactDOM.render(
 < Provider store={store}>
   <Router>
    <App />
    </Router>
  </Provider>
 ,
  document.getElementById('root')
);

