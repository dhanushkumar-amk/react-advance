import React, { useEffect, useRef } from 'react'

const UseRefhook = () => {

    const countValue = useRef(0);
    const divElement = useRef();
    const inputRef = useRef();

    function handleClick(){
        countValue.current++;
        console.log(countValue.current);
    }

    useEffect(() => {
        const getDivReference = divElement.current;
        console.log(getDivReference);

        inputRef.current.focus();
    },[])

    return (
    <div>
        <h1>UseRef Hook Demo</h1>
        <button onClick={handleClick} >Click</button>

        <div>
            <p ref={divElement} >get current dom element</p>
        </div>

        <input ref={inputRef} type="text" name='name' placeholder='Namè....' />
    </div>

  )
}

export default UseRefhook
