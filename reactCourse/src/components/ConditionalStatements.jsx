import React from 'react'

const ConditionalStatements = () => {
    const flag = true;
  return (
    <div style={{border : "1px solid red", padding : "10px"}} >
        <h1> Conditional statement </h1>
        {
            flag ? <p> True Block </p> : <p> false block </p>
        }
    </div>
  )
}

export default ConditionalStatements
