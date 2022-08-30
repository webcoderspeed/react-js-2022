
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <h2 className='brand-logo'>My Blogs</h2>
      <nav>
        <a href='/' className='nav-links'>
          Home
        </a>
        <a href='/create-blogs' className='nav-links'>
          Create Blog
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

