import React, { useState, useEffect } from 'react';
import './Home.css';
import BlogList from '../components/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className='home-container'>
      <BlogList blogs={blogs} title='All Blogs' setBlogs={setBlogs} />
    </section>
  );
};

export default Home;
