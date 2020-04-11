import Todo from "./Todo";
import React, { Component } from 'react'
import {Consumer} from "../context"

//import consumer which holds the value of the state
//for each todo we are just returning one by passing props
export default class Todos extends Component {
    render() {
        return (
            <Consumer>{value =>{
                const {todos} = value
                return todos.map(t=><Todo todo={t} key={t.id}></Todo>)
            }}</Consumer>
        )
    }
}


