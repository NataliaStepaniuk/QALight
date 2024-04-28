import React, { useState, useEffect } from 'react'
import Post from './Post';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    const url = 'https://my-json-server.typicode.com/NataliaStepaniuk/db/posts/';

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
      };

      fetchData(); // Call the fetchData function to fetch the data
    }, []);

  return (
    <div className="mb-4">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className="mb-4">
            <Post key={post.id} post={post} />
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  )
}

export default Posts