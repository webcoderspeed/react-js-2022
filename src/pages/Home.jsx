import React, { useState, useEffect } from 'react';
import './Home.css';
import BlogList from '../components/BlogList/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {

        if(!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }

        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
        setError(null)
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <section className='home-container'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <BlogList blogs={blogs} title='All Blogs' setBlogs={setBlogs} />
      )}
    </section>
  );
};

export default Home;
