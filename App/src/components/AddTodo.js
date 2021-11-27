import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todosActions'
class AddTodo extends Component {
    state = {
        description: ""
    }
    onSubmit = (event) => {
        event.preventDefault()
        if (this.state.description) {
            this.props.handleSubmit(this.state.description)
        }
        else {
            alert("empty todo")
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} name="description" type="text" placeholder="description" />
                <button type="submit">add todo</button>
            </form>
        )
    }
}
const mapStoreToProps = (store) => ({
    todos: store.todos
})
export default connect(mapStoreToProps, { handleSubmit: addTodo })(AddTodo)
