import {useContext , createContext} from 'react'


//creating context
export const ThemeContext = createContext({
    thememode : "light",
    darkTheme : ()=>{},
    lightTheme : ()=>{}
})

//creating context provider

export const Themeprovider = ThemeContext.Provider;


//custom hook for context
export default function useTheme(){
    return useContext(ThemeContext);
}