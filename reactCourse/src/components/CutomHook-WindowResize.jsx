import React from 'react';
import useWindowResize from '../hooks/UseWindowResizeHook';
const CustomHookWindowResize = () => {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>Window size</h1>
      <p>Current window width is: {width}</p>
      <p>Current window width is: {height}</p>

    </div>
  );
};

export default CustomHookWindowResize;
