import React from 'react'

export default function Todos(props) {
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
                            <td><input type="checkbox" /></td>
                            <td>{todo.description}</td>
                            <td><button onClick={() => props.delTodo(todo.id)}>x</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
