import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { rootSaga } from './saga/rootSaga'
import { TodolistReducer } from '../redux/reducers/TodolistReducer'

const sagaMiddleWare = createSagaMiddleWare()

const rootReducer = combineReducers({
    TodolistReducer,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga)

export default store;