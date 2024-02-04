import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { GetPostsByUser } from "../APIManagers/UserManager";
import { useParams } from "react-router-dom";
import { Post } from "./Post";


export const UserPost = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    GetPostsByUser(id).then((postArray) => {
        console.log(postArray)
        setPosts(postArray.posts)
    });
  }, []);

  if (!posts) {
    return null;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
        {posts.map((singlePost) => (
            <>
            <Post key={singlePost.id} post={singlePost} />
          
          <ListGroup>
            {singlePost?.comments?.map((c) => (
                <ListGroupItem key={c.id}>{c.message}</ListGroupItem>
                ))}
          </ListGroup>
                </>
              ))}
        </div>
      </div>
    </div>
  );
};