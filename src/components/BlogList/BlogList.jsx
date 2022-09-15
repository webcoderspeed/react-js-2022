import React from 'react';
import './BlogList.css';

const BlogList = ({ blogs, title }) => {

  const handleDelete = (id) => {}

  return (
    <>
      <h1>{title}</h1>
      {blogs && blogs.length ? (
        <>
          {blogs.map((blog) => {
            return (
              <article className='blog-card' key={blog.id}>
                <img src={blog.image} alt={blog.title} className='blog-img' />

                <div className='blog-card-body'>
                  <h3>{blog.category}</h3>
                  <h1>{blog.title}</h1>
                  <p>{blog.body.substring(0, 200) + '...'}</p>
                  <div className='blog-author-section'>
                    <div className='blog-author-info'>
                      <img src={blog.author.avatar} alt='' />
                      <div>
                        <h5>{blog.author.name}</h5>
                        <p>{blog.createdAt}</p>
                      </div>
                    </div>

                    <button className='blog-cta'>Read more</button>
                    <button
                      className='blog-cta'
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </>
      ) : (
        <h1>No blogs exists</h1>
      )}
    </>
  );
};

export default BlogList;
