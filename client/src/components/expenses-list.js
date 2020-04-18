import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//functional component cant have state/lifecycle methods
//accepts props, and returns jsx pretty much
//passing props here which is current expense, deleteexpense, and the key to return a table row
//foir the substring we only want the date for the datepicker, and not the timezone, etc
const Expense = props => (
  <tr>
    <td>{props.expense.username}</td>
    <td>{props.expense.description}</td>
    <td>{props.expense.price}</td>
    <td>{props.expense.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.expense._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExpense(props.expense._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this)

    this.state = {expenses: []};
  }


  /* get the expenses from the db and return all the fields to put into the array */
  componentDidMount() {
    axios.get('http://localhost:5000/expenses/')
      .then(response => {
        this.setState({ expenses: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

/*deletes and expense by the id from the db by returning the same elements in an array that matches*/ 
  deleteExpense(id) {
    axios.delete('http://localhost:5000/expenses/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      expenses: this.state.expenses.filter(el => el._id !== id)
    })
  }

  //for every expense in the array it will return a component which will be a row of the table

  expenseList() {
    return this.state.expenses.map(currentexpense => {
      return <Expense expense={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>List of expenses</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Price (in dollars)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.expenseList() }
          </tbody>
        </table>
      </div>
    )
  }
}