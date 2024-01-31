import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


const PostForm = () => {

const [formData, setFormData] = useState({
    Title: "",
    ImageUrl: "",
    Caption: "",
    DateCreated: new Date(),
    UserProfileId: ""
})


  return (
    <Card className="m-4">
      <CardBody>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Add a mothagiftin gif</div>
        <input label="Title" placeholder="Enter a title for your post" />
        <input label="ImageUrl" placeholder="Image URL" />
        <input label="Caption" placeholder="Enter a caption for your post" />
        <input label="Company" placeholder="Company Name" />
        <input label="Email" placeholder="Email Address" />
        <input type="submit" value="Submit" />
      </div>
      </CardBody>
    </Card>
  );
};

export default PostForm;