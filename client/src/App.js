import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm";
import ApplicationViews from "./components/ApplicationViews";
import Header from "./components/Header";

function App() {

 return(
  <BrowserRouter>
  <div className="App">
      <Header />
      <ApplicationViews />
  </div>
  </BrowserRouter>
);
}

export default App;