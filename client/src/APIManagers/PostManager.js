import React from "react";

let postUrl = '/api/post';
let userProfileUrl = '/api/UserProfile'

export const getAllPosts = () => {
  postUrl = 'https://localhost:5001/api/post/getwithcomments'
  return fetch(postUrl) 
    .then((res) => res.json())
};

export const getAllUserProfiles = () => {
  return fetch(userProfileUrl)
    .then((res) => res.json())
};

export const getUserById = (id) => {
  let userIdUrl = userProfileUrl + `/${id}`;
  return fetch(userIdUrl)
    .then((res) => res.json())
};

export const addPost = (singlePost) => { 
  return fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};

export const searchAllPosts = (q) => {
  postUrl = `/api/post/search?q=${q}`;
  return fetch(postUrl)
    .then((res) => res.json())
};