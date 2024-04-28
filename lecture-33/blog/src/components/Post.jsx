import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Header from './Header'; 
import PostTitle from './PostTitle';
import PostMain from './PostMain';
import PostContext from '../context/PostContext';

const Post = () => {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  const fetchData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/NataliaStepaniuk/db/posts/1');
    const data = await response.json();
    setPost(data);
  };

  const likeThis = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const likeButton = document.getElementById('like');
    likeButton.addEventListener('click', likeThis);
    return () => {
      likeButton.removeEventListener('click', likeThis);
    };
  }, [likes]);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostTitle title={post.title} />
        <PostMain content={post.content} />
        <button id='like' onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;