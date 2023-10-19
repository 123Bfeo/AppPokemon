//importamos la function createContext para crear un contexto
import React, {useState, createContext} from 'react';

//CCreamos el contexto y especificamos lo que va a tener nuestro context
 export const AuthContext = createContext({
    auth: undefined,
    login:()=>{},
    logout:()=>{},
 })

 //Creamos nuestro Provider, esto hace referencia a todas las acciones que realizara nuestro context

 export function AuthProvider({children}){
    const [auth, setAuth] = useState(undefined)
    // Function de login (guarda la data del login)
    const login = (userData)=>{
       setAuth(userData)
    }
    // Function de logout (elimina la data del login)
    const logout = ()=>{
        setAuth(undefined)
    }

    const valueContext={
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
 }