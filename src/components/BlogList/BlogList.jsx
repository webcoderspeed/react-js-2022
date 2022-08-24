import React, { useState} from 'react';

const BlogList = () => {

  const [name, setName] = useState('Sanjeev');
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // name = "King";
    setLoading(true)
    setTimeout(() => {
      setName('King');
      setLoading(false)
    }, 3000)
  };

  return (
    <div>
      {name}
      <button onClick={handleClick}>{
        loading ? 'Converting into King...' : 'Make me a king'
}
      </button>
    </div>
  );
};

export default BlogList;
