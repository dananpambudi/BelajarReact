import React, { useState } from 'react';

export default function Count() {
  const [count, setcount] = useState(10);

  const handleClick = (e) => {
    if (e.target.value === '+') {
      setcount(count + 1);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <div style={{ width: '70%', margin: '20px auto' }}>
      <button onClick={handleClick} value="-">
        -
      </button>
      <span>{count}</span>
      <button value="+" onClick={handleClick}>
        +
      </button>
    </div>
  );
}
