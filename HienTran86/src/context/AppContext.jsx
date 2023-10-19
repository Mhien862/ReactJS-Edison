/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';


export const AppContext = createContext({
    isLogin: false,
    setIsLogin: () => {}
});



export const AppContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    return <AppContext.Provider value={{
        isLogin,
        setIsLogin,
    }}>
        {props.children}
    </AppContext.Provider>
    
}