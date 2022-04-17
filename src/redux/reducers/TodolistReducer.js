import { TodolistLightTheme } from "../../pages/ToDoList/styles/Theme/TodolistLightTheme";
import { CHANGE_THEME, GET_TASK } from "../constants/TodolistConst";
import { themeArr } from "../../pages/ToDoList/styles/Theme/ThemeManager";

const initState = {
    themeTodolist: TodolistLightTheme,
    taskList: []
}

export const TodolistReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_THEME: {
            return { ...state, themeTodolist: themeArr.find(theme => theme.id == action.id).theme }
        }
        case GET_TASK: {
            return { ...state, taskList: action.taskList }
        }
        default: return { ...state }
            break;
    }
}