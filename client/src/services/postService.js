import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/posts`;

const getPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const getPost = async (slug) => {
  const res = await axios.get(`${API_URL}/${slug}`);
  return res.data;
};

const createPost = async (formData) => {
  const res = await axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

const updatePost = async (slug, formData) => {
  const res = await axios.put(`${API_URL}/${slug}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

const deletePost = async (slug) => {
  const res = await axios.delete(`${API_URL}/${slug}`);
  return res.data;
};

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
