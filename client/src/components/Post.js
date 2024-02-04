import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { getAllUserProfiles, getUserById } from "../APIManagers/PostManager";


export const Post = ({ post }) => {

  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: <Link to={`/users/${post.userProfileId}`}>{post?.userProfile?.name}</Link></p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <div>
          {post.comments && post?.comments?.length > 0 ? (
            <>
            <strong>Comments:</strong>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}> {comment?.userProfile?.name}: {comment.message}</li>
              ))}
            </ul>
            </>
          ) : (
            <p><i>No comments yet</i></p>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default Post;