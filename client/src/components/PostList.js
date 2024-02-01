import React, { useState, useEffect } from "react";
import { getAllPosts } from "../APIManagers/PostManager.js";
import { Post } from "./Post";
import { searchAllPosts } from "../APIManagers/PostManager.js";

const PostList = ({ refresh }) => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };

  const searchPosts = (q) => {
    searchAllPosts(q).then(searchedPosts => setPosts(searchedPosts));
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
};

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
      <form>
        <input type="text" placeholder="Why this disappear" onchange={handleChange} />
        
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