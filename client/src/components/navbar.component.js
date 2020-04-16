import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*import { useAuth0 } from "../react-auth0-spa";*/



export default class Navbar extends Component {

  render() {
    /*const { isAuthenticated, loginWithRedirect, logout } = useAuth0();*/
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Expensy!</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Expenses</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create a new expense</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>

        
      </nav>
  );
}
}

/*{!isAuthenticated && (
  <button onClick={() => loginWithRedirect({})}>Log in</button>
)}

{isAuthenticated && <button onClick={() => logout()}>Log out</button>}
</div>*/
 











/*<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExpenseTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Expenses</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create a new expense</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>*/