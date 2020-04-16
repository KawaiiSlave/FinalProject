
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css"
import Navbar from "./components/navbar.component"
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";
import React, { useContext } from 'react';
import { Auth0Context } from './contexts/auth0-context';

function App() {
  const auth0 = useContext(Auth0Context);
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <div className="container has-text-centered">
          {auth0.message}
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