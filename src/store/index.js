import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const { createStore,applyMiddleware } = require("redux")
const loggerMiddleware = createLogger()
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
export default store