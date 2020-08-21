import {applyMiddleware, createStore} from 'redux';
import {rootSaga} from "./rootSaga";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import state from "./state";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, state, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)