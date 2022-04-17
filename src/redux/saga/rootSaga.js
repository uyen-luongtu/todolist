import { all } from 'redux-saga/effects'
import * as TodolistSagaAction from './TodolistSagaAction'
export function* rootSaga() {
    yield all([
        TodolistSagaAction.watchGetTaskSagaAction(),
        TodolistSagaAction.watchAddTaskSagaAction(),
        TodolistSagaAction.watchDeleteTaskSagaAction(),
        TodolistSagaAction.watchDoneTaskSagaAction(),
        TodolistSagaAction.watchRejectTaskSagaAction()
    ])
}