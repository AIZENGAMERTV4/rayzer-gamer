import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import videoLogin from "../assets/video/login.mp4";
import logo from "../assets/logo.png";
import { Mail, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const { login, cadastro, resetPassword, user } = useAuth();
  const location = useLocation();
  const destinoDepoisLogin = location.state?.from || "/";

  const [cadastroModo,setCadastroModo]=useState(false);
  const [nome,setNome]=useState("");
  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");
  const [mostrarSenha,setMostrarSenha]=useState(false);
  const [loading,setLoading]=useState(false);

  if(user){
    return <Navigate to={destinoDepoisLogin} replace />;
  }

  async function enviar(e){
    e.preventDefault();
    setLoading(true);
    try{
      if(cadastroModo){
        const r=await cadastro(nome,email,senha);
        if(!r.sucesso){ alert(r.mensagem); setLoading(false); return; }
        alert("Conta criada! Confira seu e-mail.");
      }else{
        const r=await login(email,senha);
        if(!r.sucesso){ alert(r.mensagem); setLoading(false); return; }
      }
    }catch(err){
      alert(err.message);
    }
    setLoading(false);
  }

  async function recuperarSenha(){
    if(!email) return alert("Digite seu e-mail.");
    const r=await resetPassword(email);
    if(!r.sucesso) return alert(r.mensagem);
    alert("E-mail de recuperação enviado.");
  }

  return (
<div className="relative min-h-screen overflow-hidden">
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src={videoLogin} type="video/mp4"/>
  </video>

  <div className="absolute inset-0 bg-black/30"/>
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"/>
  <div className="relative z-10 flex min-h-screen items-100">
    <div className="w-full lg:w-[650px] bg-black/40 backdrop-blur-xl border-r border-white/10 flex justify-center items-center px-16 py-10">
      <div className="w-full max-w-lg mx-auto">
        <img src={logo} alt="Rayzer" className="w-24 mb-8"/>
        <h1 className="text-6xl font-black text-white">RAYZER</h1>
        <h2 className="text-3xl font-bold text-violet-400 mb-6">GAMER PC</h2>
        <p className="text-zinc-300 leading-8 mb-12">Entre na sua conta para acompanhar pedidos, favoritos e compras.</p>

        <form onSubmit={enviar} className="space-y-7">
          {cadastroModo && (
            <input className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5"
              placeholder="Nome completo" value={nome} onChange={e=>setNome(e.target.value)} />
          )}

          <div className="relative">
            <Mail className="absolute left-102 top-1/2 -translate-y-1/2 text-zinc-400" size={20}/>
            <input type="email" className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 pl-14"
              placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>

          <div className="relative">
            <input type={mostrarSenha?"text":"password"} className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 pr-14"
              placeholder="Senha" value={senha} onChange={e=>setSenha(e.target.value)}/>
            <button type="button" onClick={()=>setMostrarSenha(!mostrarSenha)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400">
              {mostrarSenha?<EyeOff size={20}/>:<Eye size={20}/>}
            </button>
          </div>

          {!cadastroModo && (
            <div className="text-right pt-2 pb-2">
              <button type="button" onClick={recuperarSenha} className="text-sm text-zinc-400 hover:text-white">
                Esqueci minha senha
              </button>
            </div>
          )}

          <button disabled={loading}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 font-bold">
            {loading ? "Entrando..." : cadastroModo ? "Criar Conta" : "Entrar"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-12">
          <div className="flex-1 h-px bg-white/10"/>
          <span className="text-zinc-400 text-sm">Compra Segura</span>
          <div className="flex-1 h-px bg-white/10"/>
        </div>

       <div className="flex justify-center mt-10 mb-8">

<button
    onClick={()=>setCadastroModo(!setCadastroModo)}
    className="text-violet-400 hover:text-violet-300 transition"
>
          {cadastroModo?"Já possui conta? Entrar":"Criar uma conta"}
        </button>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">🚚<p className="mt-2 text-xs">Frete<br/>Brasil</p></div>
          <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">🔒<p className="mt-2 text-xs">Compra<br/>Segura</p></div>
          <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">⚡<p className="mt-2 text-xs">Entrega<br/>Rápida</p></div>
        </div>

      </div>
    </div>
  </div>
</div>
  );
}
