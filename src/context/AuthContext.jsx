import { createContext, useContext, useState } from "react";


const AuthContext = createContext();



export function AuthProvider({ children }) {


  const [logado, setLogado] = useState(() => {

    return localStorage.getItem("adminLogado") === "true";

  });



  function login(email, senha) {


    if (
      email === "admin@rayzergamer.com" &&
      senha === "123456"
    ) {


      setLogado(true);


      localStorage.setItem(
        "adminLogado",
        "true"
      );


      return true;

    }


    return false;

  }





  function logout() {


    setLogado(false);


    localStorage.removeItem(
      "adminLogado"
    );


  }




  return (

    <AuthContext.Provider

      value={{
        logado,
        login,
        logout,
      }}

    >

      {children}

    </AuthContext.Provider>

  );

}




export function useAuth() {

  return useContext(AuthContext);

}