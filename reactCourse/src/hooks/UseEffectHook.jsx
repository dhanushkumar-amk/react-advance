import { useEffect, useState } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    localStorage.setItem("count", count);
  };

  useEffect(() => {
    console.log("log printed on page reload and when count changes");
  }, [count]);

  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={incrementCount}>+</button>
      <p>Count : {count}</p>
    </div>
  );
};

export default UseEffectHook;
