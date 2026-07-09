import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export default function AdminLogin() {


  const { login } = useAuth();


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erro, setErro] = useState("");



  function entrar(e) {

    e.preventDefault();


    const sucesso = login(email, senha);


    if (!sucesso) {

      setErro("Email ou senha incorretos");

    }

  }




  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      text-white
    ">


      <form
        onSubmit={entrar}
        className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-2xl
          p-8
          w-full
          max-w-md
        "
      >


        <h1 className="
          text-3xl
          font-bold
          mb-6
          text-violet-500
        ">
          Login Admin 🎮
        </h1>



        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          className="
            w-full
            bg-zinc-800
            p-3
            rounded-xl
            mb-4
          "

        />



        <input

          type="password"

          placeholder="Senha"

          value={senha}

          onChange={(e)=>setSenha(e.target.value)}

          className="
            w-full
            bg-zinc-800
            p-3
            rounded-xl
            mb-4
          "

        />




        {erro && (

          <p className="text-red-500 mb-4">

            {erro}

          </p>

        )}






        <button

          className="
            w-full
            bg-violet-600
            hover:bg-violet-700
            py-3
            rounded-xl
            font-bold
          "

        >

          Entrar

        </button>



      </form>


    </div>

  );

}