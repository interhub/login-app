import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {rootSaga} from "./rootSaga";
import createSagaMiddleware from 'redux-saga';

import {connectRouter, routerMiddleware} from 'connected-react-router'
import reducer from "./reducer";
import HISTORY from "../variable/HISTORY";

const createRootReducer = () => combineReducers({
    router: connectRouter(HISTORY),
    saga: reducer
})

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    createRootReducer(),
    compose(
        applyMiddleware(
            routerMiddleware(HISTORY),
            sagaMiddleware
        ),
    ),
)


sagaMiddleware.run(rootSaga)