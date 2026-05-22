import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userData, setUserdata] = useState([]);

    return(
        <UserContext.Provider value={[userData, setUserdata]}>{children}</UserContext.Provider>
    )
}