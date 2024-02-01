import React, { useState } from "react";
import { addPost } from "../APIManagers/PostManager";


const PostForm = ({ handleRefresh }) => {

const [formData, setFormData] = useState({
    Title: "",
    ImageUrl: "",
    Caption: "",
    DateCreated: new Date(),
    UserProfileId: 1
});

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prevState => ({ ...prevState, [name]: value}));
};

const handleSubmit = (event) => {
    event.preventDefault();
    addPost(formData)
      .then(() => {
        handleRefresh();
        setFormData({
          Title: "",
          ImageUrl: "",
          Caption: "",
          DateCreated: new Date(),
          UserProfileId: 1
        })
      })
}


  return (
      <form onSubmit={handleSubmit}>
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Add a mothagiftin gif</div>
        <label>
            Post Title:
        <br />
        <input 
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            placeholder="Enter a title for your post" />
        </label>
        <br />
        <label>
           Image URL:
        <br />
        <input 
            type="text"
            name="ImageUrl"
            value={formData.ImageUrl}
            onChange={handleChange}
            placeholder="Enter the Image's URL" />
        </label>
        <br />
        <label>
           Caption:
        <br />
        <input 
            type="text"
            name="Caption"
            value={formData.Caption}
            onChange={handleChange}
            placeholder="Enter a caption for your post" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </div>
      </form>
  );
};

export default PostForm;