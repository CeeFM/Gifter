import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter } from 'react-router-dom'
import PostForm from "./components/PostForm";

function App() {

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

 return(
  <BrowserRouter>
    <PostForm handleRefresh={handleRefresh} />
    <PostList refresh={refresh} handleRefresh={handleRefresh} />
  </BrowserRouter>
);
}

export default App;