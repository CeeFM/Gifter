import React, { useState, useEffect } from "react";
import { getAllPosts } from "../APIManagers/PostManager.js";
import { Post } from "./Post";
import { searchAllPosts } from "../APIManagers/PostManager.js";

const PostList = ({ refresh, handleRefresh }) => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  const searchPosts = (q) => {
    if (!q){
      getPosts();
    } else {
    searchAllPosts(q).then(searchedPosts => setPosts(searchedPosts));
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newValue = value;
    console.log(newValue);
    searchPosts(newValue);
    setValue("");
  }

  const handleClear = () => {
    window.location.reload();
  }

  useEffect(() => {
    getPosts();
  }, []); 

  useEffect(() => {
    getPosts();
  }, [refresh]); 



  return (
    <div className="container">
      {/* <form onSubmit={searchPosts(value)}>
      <input type="text" 
      value=""
      onChange={handleChange} />
      <input type="submit" value="Submit" />
      </form> */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Filter results" value={value} onChange={handleChange} />
        <input className="btn btn-primary" type="submit" value="Submit" />
        <button className="btn btn-primary" onClick={handleClear}>Clear</button>
      </form>
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;