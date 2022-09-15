import React, { useState, useEffect } from 'react';
import './Home.css';
import BlogList from '../components/BlogList/BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { loading, error, data, } = useFetch('http://localhost:8000/blogs');

  return (
    <section className='home-container'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <BlogList blogs={data} title='All Blogs' />
      )}
    </section>
  );
};

export default Home;
