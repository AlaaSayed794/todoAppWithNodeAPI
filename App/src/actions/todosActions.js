import { ADDTODO, EDITTODO, DELTODO, GETTODOS } from './types'

export const addTodo = (description) => dispatch => {
    fetch("/todos", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ description })
    }).then(res => res.json()).then(todo => {
        dispatch({
            type: ADDTODO,
            payload: { todo }
        })
    })
}

export const getTodos = () => async (dispatch) => {
    const res = await fetch("/todos")
    const todos = await res.json()
    dispatch({ type: GETTODOS, payload: { todos } })
}

export const editTodo = (id, completed) => dispatch => {
    fetch("todos/" + id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ completed })
    }).then(_res => {
        dispatch({
            type: EDITTODO,
            payload: {
                id, completed
            }
        })
    })
}


// sent as props to Todos component to remove a todo
export const delTodo = (id) => dispatch => {
    fetch("/todos/" + id, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(_res => {
        dispatch({
            type: DELTODO,
            payload: { id }
        })
    })
}


