import React from 'react';
import './BlogList.css';

const BlogList = () => {
  const handleClick = () => {
    console.log('Clicked');
  };

  const handleDelete = ({
    id, event
  }) => {
    console.log('blog deleted', id, event.target);
  };

  return (
    <div className='blog-list'>
      <button onClick={handleClick}>handle click</button>

      <button onClick={(e) => handleDelete({
        event:e, 
        id: Math.random()
      })}>
        Delete this blog
      </button>
    </div>
  );
};

export default BlogList;
