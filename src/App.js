import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./hockeypng.png";



class App extends Component {
  
  // changeTodo(todo) {
  //   this.setState = {todo}
  // }

  render() {
    return (
      <Router>
        <div className="container bg-inverse text-color: ">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://www.nhl.com" target="">
              <img src={logo} width="30" height="30" alt="nhl.com" />
            </a>
            <Link to="/" className="navbar-brand">Your Dream Hockey Line</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Your Line</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add a player</Link>
                </li>
              </ul>
            </div>
            
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
