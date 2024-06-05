import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setIsLoading(true);
        getCurrentUser().then(res => {
            if(res){
                setUser(res);
                setIsLoggedIn(true);
            }else{
                setUser(null);
                setIsLoggedIn(false);
            }
        }).catch(err => {
            console.log(err);
            setUser(null);
            setIsLoggedIn(false);
        }).finally(()=>{
            setIsLoading(false);
        })
        
        
    }, [])
    return (
        <GlobalContext.Provider value={{
            isLoggedIn, setIsLoggedIn, user, setUser, isLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
