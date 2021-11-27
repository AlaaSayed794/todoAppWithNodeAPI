import React from 'react'
import { editTodo, delTodo } from '../actions/todosActions'
import { connect } from 'react-redux'

function Todos(props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Completed</td>
                    <td>description</td>
                    <td>-</td>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map(todo => (
                        <tr key={todo.id}>
                            {//any element that requires a loop must have a key
                            }
                            <td><input checked={todo.completed} onChange={() => props.editTodo(todo.id, !todo.completed)} type="checkbox" /></td>
                            <td>{todo.description}</td>
                            <td><button onClick={() => props.delTodo(todo.id)}>x</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
const mapStoreToProps = (store) => ({ todos: store.todos })
const mapDispatchToProps = { editTodo, delTodo }

export default connect(mapStoreToProps, mapDispatchToProps)(Todos)
