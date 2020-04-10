import React from 'react';
import './App.css';
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Addtodo></Addtodo>
    </div>
  );
}

export default App;
