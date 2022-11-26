import {useState, createContext } from "react";

const loginStateContext = createContext(null);

const LoginProvide = ({children}) => {
    const [loginState, setLoginState] = useState(false);

    const toggleLoginState = (state) => {
        setLoginState(loginState => state)
    }

    return (
        <loginStateContext.Provider value = {{loginState, toggleLoginState}}>
            {children}
        </loginStateContext.Provider>
    )
}

export {loginStateContext, LoginProvide}