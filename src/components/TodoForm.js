import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: "",
        }
    }

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addItem(this.state.item)
        this.setState({
            item: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="item" value={this.state.item} onChange={this.handleChanges} placeholder="add another task"/>
                <button>Add Item</button>
            </form>
        )
    }
}

export default TodoForm