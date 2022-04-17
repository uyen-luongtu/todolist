import React, { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { themeArr } from './styles/Theme/ThemeManager'
import * as s from './styles/TodolistStyle'
import bgImg from '../../assets/img/bg.png'
import { changeThemeAction } from '../../redux/actions/TodolistAction'
import { ADD_TASK_SAGA, DELETE_TASK_SAGA, DONE_TASK_SAGA, GET_TASK_SAGA, REJECT_TASK_SAGA } from '../../redux/constants/TodolistConst'
import { take } from 'redux-saga/effects'
export default function Todolist() {
    const dispatch = useDispatch()
    useEffect(() => {
        getTask()
    }, [])
    const { themeTodolist, taskList } = useSelector(state => state.TodolistReducer)
    const [taskInput, setTaskInput] = useState({
        value: {
            taskName: ''
        },
        error: {
            taskName: ''
        }
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        const newValue = { ...taskInput.value, [name]: value }
        const newError = { ...taskInput.error }
        const regexString = /[a-zA-Z]/
        if (value.trim() === '' || !regexString.test(value)) {
            newError[name] = 'Invalid!'
        } else {
            newError[name] = ''
        }

        setTaskInput({
            ...taskInput,
            value: newValue,
            error: newError
        })
    }
    const getTask = () => {
        dispatch({
            type: GET_TASK_SAGA
        })
    }
    const addTask = () => {
        if (taskInput.value.taskName === '') {
            alert('Task name is required!')
        }
        if (taskInput.error.taskName === '' && taskInput.value.taskName !== '') {
            dispatch({
                type: ADD_TASK_SAGA,
                taskName: taskInput.value.taskName
            })
            setTaskInput({
                value: {
                    taskName: ''
                },
                error: {
                    taskName: ''
                }
            })
        }
    }
    const deleteTask = (taskName) => {
        dispatch({
            type: DELETE_TASK_SAGA,
            taskName: taskName
        })
    }
    const doneTask = (taskName) => {
        dispatch({
            type: DONE_TASK_SAGA,
            taskName: taskName
        })
    }
    const rejectTask = (taskName) => {
        dispatch({
            type: REJECT_TASK_SAGA,
            taskName: taskName
        })
    }
    const renderThemeSelection = () => {
        return themeArr.map((theme, index) => {
            return <option key={index} value={theme.id}>{theme.name}</option>
        })
    }
    const renderTodoTask = () => {
        return taskList.filter(task => task.status === false).map((task, index) => {
            return <li key={index}>
                <span>{task.taskName}</span>
                <div className="buttons">
                    <button className="remove" onClick={() => {
                        deleteTask(task.taskName)
                    }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button type="button" className="complete" onClick={() => {
                        doneTask(task.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }
    const renderDoneTask = () => {
        return taskList.filter(task => task.status === true).map((task, index) => {
            return <li key={index}>
                <span><i className="fa-solid fa-circle-check"></i> {task.taskName}</span>
                <div className="buttons" >
                    <button className="remove" onClick={() => {
                        deleteTask(task.taskName)
                    }}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button type="button" className="reject" onClick={() => {
                        rejectTask(task.taskName)
                    }}>
                        <i className="fa-solid fa-rotate-left"></i>
                    </button>
                </div>
            </li>
        })
    }
    return (
        <ThemeProvider theme={themeTodolist}>
            <s.Container className='scrollBarStyle'>
                <s.Header>
                </s.Header>
                <s.Body>
                    <s.Dropdown onChange={(e) => {
                        let { value } = e.target;
                        dispatch(changeThemeAction(value))
                    }}>
                        {renderThemeSelection()}
                    </s.Dropdown>
                    <s.Title>My Tasks</s.Title>
                    <s.AddTask>
                        <s.Input name="taskName" placeholder='Enter an activity...' value={taskInput.value.taskName} onChange={handleChange} />
                        <s.AddTaskButton onClick={addTask} className="ml-2"><i className="fa-solid fa-plus"></i></s.AddTaskButton>
                    </s.AddTask>
                    <p style={{ fontSize: '12px', color: 'red' }}>{taskInput.error.taskName}</p>
                    <s.List id='todo'>
                        {renderTodoTask()}
                    </s.List>
                    <s.List id='done'>
                        {renderDoneTask()}
                    </s.List>

                </s.Body>
            </s.Container>
        </ThemeProvider >
    )
}
