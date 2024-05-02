import React, { useState, useEffect } from 'react'
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/NataliaStepaniuk/db/posts/"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  console.log(posts);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='mb-8'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts