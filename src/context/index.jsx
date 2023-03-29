import { createContext } from "react";

export const Context = createContext();
export function CustomProvider({children}){
    const [productoCarro, setProductoCarro] = useState([])



    return <Context.Provider value={{}}>{children}</Context.Provider>
}