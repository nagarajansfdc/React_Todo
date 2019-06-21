import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import MovieList from "./components/MovieList";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.css";

import Test from "./components/Test";
function App() {
  return (
    // <div>
    //   <Counter />
    //   <TodoApp />
    //   <Message />
    //   <MovieList />
    // </div>

    // <div>
    //   <nav className="bg-secondary" style={{ color: "white" }}>
    //     <div className="navbar-brand">Todo App</div>
    //   </nav>
    //   <div className="app">
    //     <Todos />
    //   </div>
    // </div>

    <div>
      <Test />
    </div>
  );
}

export default App;
