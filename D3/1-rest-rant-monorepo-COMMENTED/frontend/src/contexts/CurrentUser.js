import { createContext, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){

    const [currentUser, setCurrentUser] = useState(null)

    window.setCurrentUser = setCurrentUser;
    // setCurrentUser({firstName:'Cody',lastName:'Nicholson2'});

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider