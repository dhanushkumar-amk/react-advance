import  { useCallback, useState } from 'react'
import Header from '../Components/Header';

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);

    const newFunction = useCallback(() => {}, [])

  return (
    <div>
        <Header newFunction = {newFunction} />
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} >Click here</button>
    </div>
  )
}

export default UseCallBackHook
