import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {valuesReducer} from "./value-reducer";
import {errorsReducer} from "./error-reducer";

const rootReducer = combineReducers({
    count: counterReducer,
    values: valuesReducer,
    errors: errorsReducer
})

export type RootState = ReturnType<typeof store.getState>

export const store = legacy_createStore(rootReducer)

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store