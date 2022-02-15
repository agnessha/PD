import {combineReducers, createStore} from "redux";
import navbarReducer from "./NavbarReducer";

let reducers = combineReducers({
    navbar: navbarReducer,
})

let store = createStore(reducers)

export default store;