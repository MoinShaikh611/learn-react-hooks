import React, { useState } from 'react';

export default function UseStateExplained() {
  const [arr, setArr] = useState({ count: 1, color: 'blue' });
  const i = () => setArr((prev) => ({ ...prev, count: prev.count + 1 }));
  const d = () => setArr((prev) => ({ ...prev, count: prev.count - 1 }));
  return (
    <div>
      <button onClick={i}>incr</button>
      <button onClick={d}>decr</button>
      <p>{arr.count}</p>
      <p>{arr.color}</p>
    </div>
  );
}
