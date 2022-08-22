import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <h1 className={styles.logo}>
      My Blog
     </h1>

     <div className={styles.nav_links}>  
        <a href="/">
          Home
        </a>
        <a href="/create-blog">
          Create
        </a>
     </div>
    </nav>
  )
}

export default Navbar

