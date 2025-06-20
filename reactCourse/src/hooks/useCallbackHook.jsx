import { useCallback, useState } from "react";
import Counter from "../components/Helper/Counter";


const UseCallbackHook = () => {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const memorizeSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memorizeSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])

  return (
    <div>
        <h1>useCallbackHook</h1>
        <Counter countValue = {countOne} onClick = {() => memorizeSetCountOne}  />
        <Counter countValue = {countTwo} onClick = {() => memorizeSetCountTwo}  />
    </div>
  )
}

export default UseCallbackHook
