import React, { useRef } from 'react'
import Togglable from './Togglable'

const Blog = ({ blog }) => {
  const blogRef = useRef()

 return (
  <div>
    {blog.title} {blog.author}
    <Togglable buttonLabel="view" ref={blogRef}>
      <p>{blog.url}</p>
      <p>likes {blog.likes}</p>
      <p>{blog.user.name}</p>
    </Togglable>
  </div>
)
}

export default Blog
