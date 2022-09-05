import React, { useState, useEffect } from 'react';
import './Home.css';
import BlogList from '../components/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const [count, setCount] = useState(0);
  const [name, setName] = useState('Speed');

  useEffect(() => {
    console.log('useEffect run');
    console.log({ count });
  }, [count]);

  return (
    <section className='home-container'>
      <BlogList blogs={blogs} title='All Blogs' setBlogs={setBlogs} />
      <button onClick={() => setCount(1)}>Increament count {count}</button>

      <button onClick={() => setName('Sanjeev')}>Change name {name}</button>
    </section>
  );
};

export default Home;
