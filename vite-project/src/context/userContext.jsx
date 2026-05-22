import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState([]);
    const [balance, setBalance] = useState(0);
    

    return(
        <UserContext.Provider value={{userData, setUserData, balance, setBalance}}>{children}</UserContext.Provider>
    )
}