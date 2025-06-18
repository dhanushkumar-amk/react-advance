import { createContext, useState } from "react";

// create the context
export const GlobalContext = createContext(null);

//create a global state that receive a child componenets as a props

const GlobalState = ({children}) => {

    const [theme, setTheme] = useState('Dark');

    function handleChangeThemeButton() {
        setTheme( theme === "Dark" ? "light" : "Dark")
    }

    return <GlobalContext.Provider value={{theme, handleChangeThemeButton}} >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState;
