import { useEffect } from "react";
import { connect } from "react-redux";

import {test}from './store/actions'
import {  Route, Link } from "react-router-dom";
const App=(props)=> {

  useEffect(() => {
  console.log(props);
dispatch(test())
  
  }, [])
  const {num,dispatch}=props
  return (
   <div>     
     <ul>
   <li>
     <Link to="/">Home</Link>
   </li>
   <li>
     <Link to="/about">About</Link>
   </li>
   <li>
     <Link to="/topics">Topics</Link>
   </li>
 </ul>
 <Route exact path="/" component={Home} />
      <Route path="/about" children={()=>{
        return (<div>
         <About />
        </div>)
      }}  />
      <Route path="/topics" component={Topics} />
 </div>
  );
}

export default connect(function mapStateToProps(state) {
  return state;
},
function mapDispatchToProps(dispatch) {
  return { dispatch };
})(App)
const Home = (props) => {
  console.log("获取home组件下的props",props);
  return(
  <div>
    <h2>Home</h2>
  </div>
)}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ( props ) =>{
  const {match,history}=props
console.log("获取Topics下的match是",props);
  const url='components'
  return ( <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>
         <button onClick={()=>{history.push({
			pathname:`${match.url}/${url}`,
			search: "?sort=name",
			hash: "#the-hash",
			state: {
				id: 3
			}
		})}}>点击</button>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>)
}
;

const Topic = (props) => {
  console.log("获取Topic下的match是",props);
  const {match}=props
  return (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)};