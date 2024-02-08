import React, { useState, useEffect } from "react";
import { getAllPosts } from "../APIManagers/PostManager.js";
import { Post } from "./Post";
import { searchAllPosts } from "../APIManagers/PostManager.js";
import { getAllUserProfiles } from "../APIManagers/PostManager.js";
import { getallbooks, getallmovies, getallmusic } from "../APIManagers/ExternalManager.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);
  const [books, setbooks] = useState([]);
  const [movies, setmovies] = useState([]);
  const [music, setmusic] = useState([]);

const getbooks = () => {
  getallbooks().then(thesebooks => setbooks(thesebooks)).then(console.log(books));
}

const getmovies = () => {
  getallmovies().then(thesemovies => setmovies(thesemovies)).then(console.log(movies));
}

// const getmusic = () => {
//   getallmusic().then(thismusic => setmusic(thismusic));
// }

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
    let newValue = value;
    console.log(newValue);
    searchPosts(newValue);
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

  const printbooks = () => {
    getbooks();
  }

  const printmovies = () => {
    getmovies();
  }

  const printmusic = () => {
    getallmusic();
  }

  return (
    <div className="container">
      <button onClick={printbooks}>Book API test data</button>
      <button onClick={printmovies}>Movie API test data</button>
      <button onClick={printmusic}>Music API test data</button>
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