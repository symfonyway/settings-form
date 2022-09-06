import { configureStore } from "@reduxjs/toolkit";
import { nsFormReducer } from './reducers';

export const store = configureStore({
    reducer: {
        nsFormReducer: nsFormReducer
    }
});
