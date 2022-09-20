
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h2 className='brand-logo'>My Blogs</h2>
      <nav>
        <Link to='/' className='nav-links'>
          Home
        </Link>
        <Link to='/create-blogs' className='nav-links'>
          Create Blog
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

