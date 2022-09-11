import React, { useState, useEffect } from 'react';
import './Home.css';
import BlogList from '../components/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className='home-container'>
      {
        loading ? <h1>Loading...</h1> : <BlogList blogs={blogs} title='All Blogs' setBlogs={setBlogs} />
      }
    </section>
  );
};

export default Home;
