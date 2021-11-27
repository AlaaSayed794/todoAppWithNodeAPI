import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { getTodos } from './actions/todosActions'
import Header from './components/Header';
class App extends Component {

  state = { loading: true }


  //returns jsx to be rendered
  render() {
    return (
      <div>
        {//ternary operator : condition?trueDecision:falseDecision
        }
        {this.state.loading ? <h2>loading please wait</h2> : <div>
          <Header title="MY TODO APP" />
          <AddTodo />
          <Todos />
        </div>}
      </div>
    )
  }

  //handles netword requests , getting todos then setting it to the state
  componentDidMount() {
    this.props.getTodos()
    this.setState({
      loading: false
    })
  }

}


export default connect(null, { getTodos })(App)