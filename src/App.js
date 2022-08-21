import React from "react";

function App() {

    const name = "Sanjeev"
    const age = 21

  const link = process.env.REACT_APP_LINK

  console.log(link)

  return (
    <div className="App">
      <h1>
        My name is {name} and I am {age} years old
      </h1>

      <p>
        Random number: {Math.random() * 100}
      </p>
      {
        link
      }
      <a href={link}>Google</a>
    </div>  
  );
}

export default App;



