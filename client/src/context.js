import React, { Component } from 'react'
const Context = React.createContext()

//action is an object being passed with a type, 
//chaining true to false, and vice versa
const reducer = (prevState,action) => {
    switch(action.type){
        case "TOGGLE":
            return{todos:prevState.todos.map(t=>{if(t.id === action.payload){t.complete=!t.complete}; return t
            })}
        default:
            return prevState    
    }
}

//created Context, and Context.Provider to wrap the app
//this renders all of our todos
export class Provider extends Component {
    state={
        todos: [
        {
            id:1,
            title:"wash the dishes",
            complete:false
        },
        {
            id:2,
            title:"wash the laundry",
            complete:false
        },
        {
            id:3,
            title:"wash the dog",
            complete:false
            }
        ],
        dispatch:(action)=>this.setState(prevState => reducer(prevState,action))
    }
    //creating a method,and giving it an object to pass when it runs
    
    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer