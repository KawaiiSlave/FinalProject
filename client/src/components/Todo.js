import React, { Component } from 'react'
import { Consumer } from "../context"

export default class Todo extends Component {
    style = () => {
    const { complete } = this.props.todo
    return { textDecoration: complete ? "line-through" : "none" }
    }
    toggle = (id, dispatch) => {
        dispatch({ type: "TOGGLE", payload: id })
    }
    render() {
        const { title, id } = this.props.todo
        return (
            <Consumer>{value =>{
            const { dispatch } = value
            return <h3 className="text-dark text-center p-1 bg-light border-bottom" style=
            {this.style()}>
                <i className="far fa-times-circle fa-sm float-left m-1 text-danger"></i>{title}
                <input type="checkbox" className="m-2 float-right" onChange={this.toggle.bind(this,
                    id, dispatch)} />
            </h3>
             }}</Consumer>

        )
    }
}
