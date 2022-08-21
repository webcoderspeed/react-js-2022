import React from 'react';

const Navbar = () => {
  return (
    <nav>
     <div>
      My Blog
     </div>

     <div>  
        <a href="/" style={
          {
            marginRight: "1rem"
          }
        }>
          Home
        </a>
        <a href="/create-blog">
          Create Blog
        </a>
     </div>
    </nav>
  )
}

export default Navbar

