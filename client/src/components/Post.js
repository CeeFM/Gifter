import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Post = ({ post }) => {

    function returnComments() {
      let html = "";
      if (post.Comments.length > 0) {
        for (let i = 0; i < post.Comments.length; i++) {
          html += `<p><strong>${post?.Comments[i]?.userProfile?.name}<strong> says: ${post?.Comments[i]?.Message}</p><br />`
        }
        return html;
      } else {
        return
      }
    }

  return (
    <Card className="m-4">
      <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
        <p>
          <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
          </Link>
        </p>
        <p>{post.caption}</p>
        <p>
          {returnComments}
        </p>
      </CardBody>
    </Card>
  );
};