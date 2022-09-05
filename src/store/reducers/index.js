import { combineReducers } from "redux";
import { ethernetReducer } from "./ethernetReducer";
import { wirelessReducer } from "./wirelessReducer";

export const rootReducer = combineReducers({
    ethernet: ethernetReducer,
    wireless: wirelessReducer
})  
