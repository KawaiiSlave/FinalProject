import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"
import Navbar from "./components/navbar.component"
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";
//import { useAuth0 } from "./react-auth0-spa";

function App() {
  /*const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }*/


  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <div className="container has-text-centered">
        </div>
      <Route path="/" exact component={ExpensesList} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/create" component={CreateExpense} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;