import Axios from 'axios'
import { takeLatest } from 'redux-saga/effects';
import { DOMAIN } from '../util/constants/settingSystem'

const axiosInstance = Axios.create({
    baseURL: `${DOMAIN}`,
})

export class TodolistService {
    constructor() {

    }
    getTaskApi() {
        return axiosInstance.get(`/ToDoList/GetAllTask`);
    }
    addTaskApi(taskName) {
        return axiosInstance.post('/ToDoList/AddTask', { taskName: taskName })
    }
    deleteTaskApi(taskName) {
        return axiosInstance.delete(`/ToDoList/deleteTask?taskName=${taskName}`)
    }
    doneTaskApi(taskName) {
        return axiosInstance.put(`/ToDoList/doneTask?taskName=${taskName}`)
    }
    rejectTaskApi(taskName) {
        return axiosInstance.put(`/ToDoList/rejectTask?taskName=${taskName}`)
    }

}

export const todolistService = new TodolistService()
