import React from 'react'
import ReactDOM from 'react-dom'

import './components/Todo.css'

import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

const toDoList = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  toggleItem = clickOnId => {
    this.setState({
      toDoList : this.state.toDoList.map(item=> {
        return item.id === clickOnId
          ? {...item, completed: !item.completed}
          : item
      })
    })
  }

  removeItem = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => {
          return item.completed != true
      })
    })
  }

  addItem = itemName => {
    const newItem ={
      task: itemName,
      id: new Date(),
      completed:false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <ToDoForm addItem={this.addItem}/>
        <ToDoList
          toDoList={this.state.toDoList}
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
