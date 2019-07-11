import React, {  useState  } from 'react';

export default function Example(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(props.perro);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }