import { call, takeLatest, put } from 'redux-saga/effects'
import { todolistService } from '../../service/TodolistService'
import { ADD_TASK_SAGA, DELETE_TASK_SAGA, DONE_TASK_SAGA, GET_TASK, GET_TASK_SAGA, REJECT_TASK_SAGA } from '../constants/TodolistConst'
function* getTaskSagaAction() {
    try {
        const result = yield call(() => {
            return todolistService.getTaskApi()
        })
        if (result.status === 200) {
            yield put({
                type: GET_TASK,
                taskList: result.data,
            })
        }

    } catch (error) {
        console.log(error)
    }
}

export function* watchGetTaskSagaAction() {
    yield takeLatest(GET_TASK_SAGA, getTaskSagaAction)
}

function* addTaskSagaAction(action) {
    const { taskName } = action
    try {
        const result = yield call(() => {
            return todolistService.addTaskApi(taskName)
        })
        if (result.status === 200) {
            yield put({
                type: GET_TASK_SAGA,
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export function* watchAddTaskSagaAction() {
    yield takeLatest(ADD_TASK_SAGA, addTaskSagaAction)
}

function* deleteTaskSagaAction(action) {
    const { taskName } = action
    try {
        const result = yield call(() => {
            return todolistService.deleteTaskApi(taskName)
        })
        if (result.status === 200) {
            yield put({
                type: GET_TASK_SAGA,
            })
        }
    } catch (error) {
        console.log(error.response)
    }
}

export function* watchDeleteTaskSagaAction() {
    yield takeLatest(DELETE_TASK_SAGA, deleteTaskSagaAction)
}

function* doneTaskSagaAction(action) {
    const { taskName } = action
    try {
        const result = yield call(() => {
            return todolistService.doneTaskApi(taskName)
        })
        if (result.status === 200) {
            yield put({
                type: GET_TASK_SAGA,
            })
        }
    } catch (error) {
        console.log(error.response)
    }
}

export function* watchDoneTaskSagaAction() {
    yield takeLatest(DONE_TASK_SAGA, doneTaskSagaAction)
}

function* rejectTaskSagaAction(action) {
    const { taskName } = action
    try {
        const result = yield call(() => {
            return todolistService.rejectTaskApi(taskName)
        })
        if (result.status === 200) {
            yield put({
                type: GET_TASK_SAGA,
            })
        }
    } catch (error) {
        console.log(error.response)
    }
}

export function* watchRejectTaskSagaAction() {
    yield takeLatest(REJECT_TASK_SAGA, rejectTaskSagaAction)
}
