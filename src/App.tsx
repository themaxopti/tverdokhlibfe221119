import React from "react";
import logo from "./logo.svg";
import { Users } from "./components/Users/Users";
import { User } from "./components/User/User";
import { UserPage } from "./components/UserPage/UserPage";
import { Link, Routes, Route } from "react-router-dom";
import { Router } from "./utils/Router/Router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
