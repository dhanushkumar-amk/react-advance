import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextText = () => {
    const { theme } = useContext(GlobalContext);
  return (
    <div style={{border : "2px solid gray", padding : "20px 30px",  textAlign : "center" }} >
        <h1 style={{color : theme === "Dark" ? "Blue" : "black"}} >Dhanushkumar</h1>
    </div>
  )
}

export default ContextText
