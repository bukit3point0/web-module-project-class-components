// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = props => {

    console.log(props.removeItem)
    return (
        <div className="toDoList">
            {props.toDoList.map(item => (
                <Todo
                    key={item.id}
                    item={item}
                    toggleItem={props.toggleItem}
                />
            ))}
            <button className="clear-btn" onClick={props.removeItem}>
                Clear Completed
            </button>
        </div>
    )
}

export default TodoList