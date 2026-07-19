import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  const {
    login,
    cadastro,
    resetPassword,
    user,
  } = useAuth();


  const location = useLocation();

  console.log("USUARIO LOGIN:", user);

  const destinoDepoisLogin = location.state?.from || "/";


  const [cadastroModo, setCadastroModo] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);



 console.log("USER ATUAL:", user);

if (user) {
  return <Navigate to={destinoDepoisLogin} replace />;
}



  async function enviar(e) {

    e.preventDefault();

    setLoading(true);


    try {

      if (cadastroModo) {

        await cadastro(nome, email, senha);

        alert(
          "Conta criada com sucesso! Confira seu e-mail para confirmar a conta."
        );


      } else {

        const resultado = await login(email, senha);

console.log(resultado);

if (!resultado.sucesso) {
  alert(resultado.mensagem);
  return;
}

      }


    } catch (err) {

      alert(err.message);

    }


    setLoading(false);

  }



  async function recuperarSenha() {

    if (!email) {
      return alert("Digite seu e-mail.");
    }


    try {

      await resetPassword(email);

      alert("E-mail de recuperação enviado.");


    } catch (err) {

      alert(err.message);

    }

  }



  return (

    <Layout>

      <div className="min-h-[80vh] flex justify-center items-center">

        <div
          className="
          w-full
          max-w-md
          bg-zinc-900
          border
          border-zinc-800
          rounded-3xl
          p-10
          shadow-2xl
          "
        >

          <h1 className="text-4xl font-black text-center text-purple-500">
            RAYZER GAMER
          </h1>


          <p className="text-center text-zinc-400 mt-2">

            {cadastroModo
              ? "Criar Conta"
              : "Entrar"}

          </p>



          <form
            onSubmit={enviar}
            className="space-y-5 mt-8"
          >


            {cadastroModo && (

              <input
                placeholder="Nome Completo"
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                className="w-full bg-zinc-800 rounded-xl p-4"
              />

            )}



            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full bg-zinc-800 rounded-xl p-4"
            />



            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e)=>setSenha(e.target.value)}
              className="w-full bg-zinc-800 rounded-xl p-4"
            />



            <button
              disabled={loading}
              className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-700
              to-fuchsia-600
              font-bold
              hover:scale-[1.02]
              transition
              "
            >

              {loading
                ? "Aguarde..."
                : cadastroModo
                ? "Criar Conta"
                : "Entrar"}

            </button>


          </form>



          <button
            onClick={()=>setCadastroModo(!cadastroModo)}
            className="w-full mt-6 text-purple-400 hover:text-purple-300"
          >

            {cadastroModo
              ? "Já possui conta? Entrar"
              : "Criar uma conta"}

          </button>



          {!cadastroModo && (

            <button
              onClick={recuperarSenha}
              className="w-full mt-3 text-zinc-400 hover:text-white"
            >

              Esqueci minha senha

            </button>

          )}


        </div>


      </div>


    </Layout>

  );

}