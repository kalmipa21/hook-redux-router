import { combineReducers, createStore } from "redux";
import counterReducer from "./Features/counter/counterReducer.js";
import headerRedducer from "./Features/Header/headerReducer.js";

let rootReducer = combineReducers({
  name: counterReducer,
  header: headerRedducer,
});
// middleware
// const composeEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
// let stores = createStore(rootReducer, composeEnhancers());

let stores = createStore(rootReducer);
export default stores;
