import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm";

function App() {

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

 render(
  <BrowserRouter>
    <PostForm handleRefresh={handleRefresh} />
    <PostList refresh={refresh} />
  </BrowserRouter>,
  document.getElementById('root')
)
}

export default App;