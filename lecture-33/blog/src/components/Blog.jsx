import React from 'react'
import Layout from './Layout'
import Header from './Header'
import BlogInfo from './BlogInfo'
import BlogContext from '../context/BlogContext'

const Blog = () => {
    const blogName = "Назва вашого блогу";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Header />
        <div className="p-4 text-white">
          <BlogInfo />
        </div>
      </Layout>
    </BlogContext.Provider>
  )
}

export default Blog