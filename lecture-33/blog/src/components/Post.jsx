import React, { useState, useEffect } from 'react';
import Header from './Header'; 
import Layout from './Layout';
import PostTitle from './PostTitle';
import PostMain from './PostMain';
import PostContext from '../context/PostContext';

const Post = ({post}) => {
  const [likes, setLikes] = useState(0);

  const likeThis = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  if (!post) {
    return null; // or return a loading spinner or some other placeholder
  }

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <PostTitle title={post.title} />
        <PostMain content={post.content} />
        <button className='mt-4' id='like' onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;