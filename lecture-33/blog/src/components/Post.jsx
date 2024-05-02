import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import PostContext from '../context/PostContext';
import PostTitle from './PostTitle';
import PostMain from './PostMain';

const Post = ({post}) => {
  const [likes, setLikes] = useState(0);

  const likeThis = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  if (!post) {
    return null; 
  }

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <div className='mt-4 w-2/3 mx-auto'>
        <div className='border-b-2 border-gray-200 pb-2'>
          <h1 className='text-3xl font-bold'>{post.title}</h1>
          <p className='text-sm text-gray-500'>{post.date}</p>
       <PostTitle title={post.title} />
        </div> 
        <PostMain content={post.content} />
        <button className='mt-4' id='like' onClick={likeThis}>
          Like this post <strong>{likes}</strong>
        </button>
        </div>
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;