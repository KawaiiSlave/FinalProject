//creates expense in database
//requiring our react modules we need
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



//calling super because its a constructor of a subclass
//all components with a constructor should have it
export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    //using .bind lets you pass it as a callback without worrying about it losing its context
    //binding our methods to refer to the class component
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    /*setting up variables with state
    setting initial state to the property of the 
    mongodb object we reference, so when it updates
    it updates the state of the app with new values*/
    this.state = {
      username: '',
      description: '',
      price: 0,
      date: new Date(),
      users: []
    }
  }

  /*lifecycle method. after it mounts we get all the users to check if there is one user in the database
   and return each user id, and their username from the database*/
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  //when the properties change, it changes the state
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
//no e here because its a calendar selection
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }



  /*once a expense is submitted it will add it to the
  db, and take you back to the list of expenses*/

  onSubmit(e) {
    e.preventDefault();

    const expense = {
      username: this.state.username,
      description: this.state.description,
      price: this.state.price,
      date: this.state.date
    }

    console.log(expense);

    /* when you post an expense it will add it to the database from our backend point*/
    axios.post('http://localhost:5000/expenses/add', expense)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Log of Expenses</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Item Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Expense List" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}


/*Refs are a function provided by React to access
 the DOM element and the React element that you might
 have created on your own. They are used in cases 
where we want to change the value of a child 
component, without making use of props and all.*/


/* for each user in the array it will return an option
in the select box. has a key, value pair, and text 
to see what you are selecting*/