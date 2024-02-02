import React, { useState, useEffect } from "react";
import { getAllPosts } from "../APIManagers/PostManager.js";
import { Post } from "./Post";
import { searchAllPosts } from "../APIManagers/PostManager.js";
import { getAllUserProfiles } from "../APIManagers/PostManager.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

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

  // const assignUsertoComment = () => {
  //   for(const post in posts) {
  //     if (post?.comments?.length > 0) {
  //       for (let i = 0; i < post.comments.length; i++) {
  //         let commentUser = users.find((user) => user.id === post.comments[i].userProfileId);
  //         post.comments[i].userProfile = commentUser;
  //       }
  //     }
  //   }
  // }

  const getAllUsers = () => {
    getAllUserProfiles()
      .then(allUsers => setUsers(allUsers))
      // .then(assignUsertoComment())
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newValue = value;
    searchPosts(newValue);
    setValue("");
  }

  const handleClear = () => {
    window.location.reload();
  }

  useEffect(() => {
    getPosts();
    getAllUsers();
  }, []); 

  return (
    <div className="container">
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