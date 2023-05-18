import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url,newPost);
export const updatePosts = (id,updatePosts) =>  axios.patch(`${url}/${id}`,updatePosts);
export const deletePosts = (id) =>  axios.delete(`${url}/${id}`);
export const updateLikeCount = (id,updateLikeCount) =>  axios.patch(`${url}/likes/${id}`,updateLikeCount);