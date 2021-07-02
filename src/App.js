import Home from './components/Home.js'
import Error from './components/Error.js'
import Login from './components/Login.js'
import { Route } from 'react-router'
import { Redirect, withRouter } from 'react-router-dom'
const App=(props)=>{
const {location,history}=props
const routearr=[
  {path:'/',components:Home},
  {path:'/login',components:Login},
  {path:'/404',components:Error}]
const RouterGuard=()=>{
  let {pathname}=location
  let thisRoute=routearr.find((route)=>route.path===pathname)
  let isLogin=localStorage.getItem('isLogin')
//如果没有islogin而且导航是login，就直接去登录界面
  if (pathname==='/login'&&!isLogin) {
 return <Route path='/login' component={Login} />
  }
  //如果本地有islogin
  if (isLogin) {
     //如果登陆了跳转login页，则重定向
     if(pathname == '/login'){
      return <Redirect to="/" />
    }
    // 判定路由是否存在，如果存在正常渲染
    if(thisRoute){
      return <Route path={pathname} component={thisRoute['component']} exact/>
    }else{
      //否则进入404页面
      return <Redirect to="/error" />;
    }
  }else{
    <Route path='/login' component={Login}/>;
   history.push('/login')
  }


}
  return (<div>

{RouterGuard()}
  </div>)
}

export default withRouter(App);