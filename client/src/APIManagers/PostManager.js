import React from "react";

let postUrl = '/api/post';

export const getAllPosts = () => {
  return fetch(postUrl) 
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
  postUrl += `/search?q=${q}`;
  return fetch(postUrl)
    .then((res) => res.json())
};