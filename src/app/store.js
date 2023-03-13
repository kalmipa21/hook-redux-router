import { combineReducers, createStore } from "redux";
import counterReducer from "./Features/counter/counterReducer";
// import headerRedducer from "./Features/Header/headerReducer.js";

let rootReducer = combineReducers({
  counter: counterReducer,
  //   header: headerRedducer,
});

let store = createStore(rootReducer);
export default store;
