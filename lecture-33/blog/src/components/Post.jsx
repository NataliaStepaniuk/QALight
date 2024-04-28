import React, { useState, useEffect } from 'react';

const Post = () => {
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);

  const fetchData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/NataliaStepaniuk/db/posts/1');
    const data = await response.json();
    setPost(data);
  };

  const likeThis = () => {
    setLikes(likes + 1);
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
    <article className='post'>
      <div className='cover-container'>
        <img src={post.cover} alt={post.title} />
      </div>
      <div className='post-footer'>
        <h3>{post.title} {post.id}</h3>
        <p>{post.content}</p>
        <button id='like'>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
};

export default Post;