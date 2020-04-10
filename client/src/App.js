import React from 'react';
import './App.css';
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";


function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Addtodo></Addtodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
