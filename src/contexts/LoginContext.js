import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({children}) {   

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
        <LoginContext.Provider value={{email, setEmail, password, setPassword}}>
            {children}
        </LoginContext.Provider>
    )
}