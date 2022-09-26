import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';

const BlogDetail = () => {
  
  const { id } = useParams();

  const {data: blog, error, loading } = useFetch('http://localhost:8000/blogs/' + id);


  if(loading) return <div>Loading...</div>

  if(error) return <div>{error}</div>


  return (
    <div className='home-container'>
      <img src={blog.image} alt="" 
        width={'100%'} height={250} />
      <h1>{blog.title}</h1>
      <div className='blog-author-section'>
        <div className='blog-author-info'>
          <img src={blog.author.avatar} alt='' />
          <div>
            <h5>{blog.author.name}</h5>
            <p>{blog.createdAt}</p>
          </div>
        </div>
      </div>
      <p>{blog.body}</p>
     
      </div>
  )
}

export default BlogDetail