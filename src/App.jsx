import React, { useState } from "react";
import { ReactDOM } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile";
import "./App.css";

const App = () => (
  <div>
    <h1>Hello from the main page of the app!</h1>
    <p>Here are some examples of links to other pahes</p>
    <nav>
      <ul>
        <li>
          <a href="profile">Profile page</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default App;
