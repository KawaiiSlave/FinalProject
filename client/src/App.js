import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import "./App.css"
import Navbar from "./components/navbar"
import ExpensesList from "./components/expenses-list";
import EditExpense from "./components/edit-expense";
import CreateExpense from "./components/create-expense";
import CreateUser from "./components/create-user";
//import SimpleBottomNavigation from "./components/navigation";


function App() {


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

//Router helps map different url paths to different components

export default App;