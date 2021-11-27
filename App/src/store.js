import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const preloadedState = {}
const enhancers = [thunk]
const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(...enhancers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store