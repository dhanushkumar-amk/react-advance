import React, { useReducer } from 'react'

const initialState = {
    showTextFlag : false,
    changeTextStyleFlag : false,
}

// UNIQUE VALUE
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEST = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE"

function reducer(state, action){
    switch (action.type){
        case "HIDE_TEXT" :
            return {
                ...state,
                 showTextFlag : false
                }
        case "SHOW_TEST":
             return {
                ...state,
                 showTextFlag : true
                }
        case "CHANGE_TEXT_STYLE":
             return {
                ...state,
                 changeTextStyleFlag : !state.changeTextStyleFlag
                }
        default :
            return state;
    }
}

const UseReducerHook = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    { state?.showTextFlag ? <h1 style={{fontSize : "20px", marginTop : "30px", color : state.changeTextStyleFlag   ? "red" : "green" }}>Use Reducer Hook Example</h1>  : null}

    <div style={{display : "flex" , alignItems : "center", justifyContent: "space-between", flexDirection : "row", marginTop : "30px"}}>
        <button onClick={() => dispatch({type : 'HIDE_TEXT'})} style={{backgroundColor : "transparent" , cursor: "pointer", border : "1px solid black",  padding : "10px 10px"}} >Hide Text</button>
        <button onClick={() => dispatch({type : "SHOW_TEST"})}  style={{backgroundColor : "transparent", cursor: "pointer",border : "1px solid black", padding : "10px 10px"}}>show Text</button>
        <button onClick={() => dispatch({type : "CHANGE_TEXT_STYLE"})} style={{backgroundColor : "transparent", cursor: "pointer",border : "1px solid black",  padding : "10px 10px"}}>change style Text</button>
    </div>
    </>
  )
}

export default UseReducerHook
