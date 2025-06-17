import { useState } from "react"


const UseStateHook = () => {

    const [flag, setFlag] = useState(false);
    const [count, setcount] = useState(0);

    const incrementCount = () => {
        setcount (count + 1);
    }

    const decremenetCount = () => {
        setcount(count - 1);
    }


  const handleClick = () => {
      setFlag(!flag);
};

  return (
    <div>
        <h1 style={{margin : "20px"}}>use State hook demo</h1>
        {
        flag ?  <p>is flag is true</p> : <p>is flag is false</p>
        }
        {/* <button onClick={() => setFlag(!flag)} >Toggle state</button> */}
        <button onClick={handleClick} >Toggle state</button>

        <div style={{marginTop : "100px"}} >
            <button style={{padding : "10px 20px", color : "gray", backgroundColor : "pink"}} onClick={incrementCount} >+</button>
           <p style={{fontSize: "24px"}} >{count}</p>
            <button style={{padding : "10px 20px", color : "gray", backgroundColor : "pink"}} onClick={decremenetCount} >-</button>
        </div>

    </div>
  )
}

export default UseStateHook
