import React , {useState , useContext} from "react";

import UserContext from "./userContext";

const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null)

    return (
        <UserContextProvider value = {{user , setUser}}>
            {children}
        </UserContextProvider>
    )
}

export default UserContextProvider;

