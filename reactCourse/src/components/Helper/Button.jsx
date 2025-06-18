import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const ContextButton = () => {

    const { handleChangeThemeButton } = useContext(GlobalContext);


  return (
    <div>
        <button style={{color: "black", backgroundColor : "pink", padding : "10px 20px" , border : "none", borderRadius : "5px", cursor : "pointer", margin : "20px" }} onClick={handleChangeThemeButton}  >Change Theme</button>
    </div>
  )
}

export default ContextButton
