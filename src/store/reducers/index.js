import { combineReducers } from 'redux';
import { ethernetReducer } from './ethernetReducer';
import { wirelessReducer } from './wirelessReducer';
import { validationReducer } from './validationReducer';

export const nsFormReducer = combineReducers({
    ethernet: ethernetReducer,
    wireless: wirelessReducer,
    validation: validationReducer
})  
