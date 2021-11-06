import './App.css';
import React, { Component } from 'react'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default class App extends Component {
  constructor(props) {
    super(props)
    // can be defined here or outside constructor as : state = ......
    this.state = { loading: false, todos: [] }
  }


  //sent as props to AddToDo component to be called on submission
  addTodo = (description) => {
    fetch("/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description })
    }).then(res => res.json()).then(todo => {
      this.setState({ todos: [...this.state.todos, todo] })
    })
  }


  // sent as props to Todos component to remove a todo
  delTodo = (id) => {
    fetch("/todos/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(_res => {
      this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
    })
  }


  //returns jsx to be rendered
  render() {
    return (
      <div>
        {//ternary operator : condition?trueDecision:falseDecision
        }
        {this.state.loading ? <h2>loading please wait</h2> : <div>
          <h1>Todo App</h1>
          <AddTodo handleSubmit={this.addTodo} />
          <Todos delTodo={this.delTodo} todos={this.state.todos} />
        </div>}
      </div>
    )
  }

  //handles netword requests , getting todos then setting it to the state
  componentDidMount() {
    this.getTodos()
  }

  //getting todo from database
  async getTodos() {
    const res = await fetch("/todos")
    const todos = await res.json()
    this.setState({ loading: false, todos })
  }
}

