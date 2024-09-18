import { createContext } from "react";

const userContext = createContext({
    userLoggedIn : "Default User"
});

export default userContext;