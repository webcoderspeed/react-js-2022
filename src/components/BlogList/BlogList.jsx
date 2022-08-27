import React from 'react';
import './BlogList.css'

const BlogList = () => {
  return (
    <article className='blog-card'>
      <img
        src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'
        alt=''
        className='blog-img'
      />

      <div className='blog-card-body'>
        <h3>Artifical Intelligence</h3>
        <h1>AI Doesn't Understand Much - But Maybe A Little</h1>
        <p>
          Back in 2019, Gucci brought video games to ites app with a new section
          Gucci Arcade, inspired by creative...
        </p>
        <div className='blog-author-section'>
          <img
            src='https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg'
            alt=''
          />
          <div>
            <h5>Sanjeev Sharma</h5>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogList;

