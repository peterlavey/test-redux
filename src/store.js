import foodReducer from "./reducers/foodReducer";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    created: false,
    categories: []
};

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(foodReducer, initialState, middleware);