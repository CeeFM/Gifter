import React from "react";
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm";

function App() {
 render(
  <BrowserRouter>
    <PostForm />
    <PostList />
  </BrowserRouter>,
  document.getElementById('root')
)
}

export default App;