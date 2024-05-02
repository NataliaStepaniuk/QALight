import React from 'react'
import Layout from './Layout'
import Header from './Header'
import BlogContext from '../context/BlogContext'
import { useContext } from 'react'


const Blog = () => {
  const blogName = "Назва вашого блогу";
  const contextValue = useContext(BlogContext);

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Header />
        <div style={{ padding: '1rem', color: 'white', marginBottom: '3rem' }}>
          <h1>{contextValue}</h1>
        </div>
      </Layout>
    </BlogContext.Provider>
  )
}
export default Blog;
