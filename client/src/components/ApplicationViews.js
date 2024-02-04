import { Routes, Route, Navigate} from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import { useState } from "react";
import { UserPost } from "./UserPosts";
import Post from "./Post";

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<PostList />} />
        
        <Route path="/posts/add" element={<PostForm />} />
        
        <Route path="/posts/:id" element={<PostDetails />} />

        <Route path="/users/:id" element={<UserPost />} />
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
