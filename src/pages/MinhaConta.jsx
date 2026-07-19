import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  FaBox,
  FaHeart,
  FaMapMarkerAlt,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";


export default function MinhaConta() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();



  async function sair() {

    await logout();

    navigate("/");

  }



  const nome =
    user?.user_metadata?.nome ||
    "Cliente Rayzer";


  const inicial =
    nome.charAt(0).toUpperCase();



  return (

    <Layout>


      <div className="
        min-h-[80vh]
        bg-zinc-950
        py-10
        px-4
      ">


        <div className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-4
          gap-6
        ">


          {/* MENU LATERAL */}

          <aside className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
          ">


            <div className="
              flex
              flex-col
              items-center
              text-center
            ">


              <div className="
                w-24
                h-24
                rounded-full
                bg-gradient-to-br
                from-purple-600
                to-fuchsia-600
                flex
                items-center
                justify-center
                text-4xl
                font-black
              ">

                {inicial}

              </div>


              <h2 className="
                mt-4
                font-bold
                text-xl
              ">

                {nome}

              </h2>


              <p className="
                text-zinc-400
                text-sm
                break-all
              ">

                {user?.email}

              </p>


            </div>



            <div className="
              mt-8
              space-y-3
            ">


              <button
                onClick={()=>navigate("/minha-conta")}
                className="
                w-full
                flex
                items-center
                gap-3
                bg-purple-700
                rounded-xl
                p-3
                font-bold
                "
              >

                <FaUserCog/>

                Minha conta

              </button>



              <button
                onClick={()=>navigate("/pedidos")}
                className="
                w-full
                flex
                items-center
                gap-3
                bg-zinc-800
                rounded-xl
                p-3
                "
              >

                <FaBox/>

                Meus pedidos

              </button>



              <button
                onClick={()=>navigate("/favoritos")}
                className="
                w-full
                flex
                items-center
                gap-3
                bg-zinc-800
                rounded-xl
                p-3
                "
              >

                <FaHeart/>

                Favoritos

              </button>



              <button
                className="
                w-full
                flex
                items-center
                gap-3
                bg-zinc-800
                rounded-xl
                p-3
                "
              >

                <FaMapMarkerAlt/>

                Endereços

              </button>



              <button
                onClick={sair}
                className="
                w-full
                flex
                items-center
                gap-3
                bg-red-600
                rounded-xl
                p-3
                font-bold
                "
              >

                <FaSignOutAlt/>

                Sair

              </button>


            </div>


          </aside>





          {/* CONTEÚDO */}

          <main className="
            md:col-span-3
            space-y-6
          ">


            <div className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
            ">


              <h1 className="
                text-3xl
                font-black
                text-purple-500
              ">

                Olá, {nome} 👋

              </h1>


              <p className="
                text-zinc-400
                mt-2
              ">

                Bem-vindo ao painel da sua conta Rayzer Gamer.

              </p>


            </div>




            <div className="
              grid
              sm:grid-cols-2
              gap-5
            ">



              <div className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
              ">

                <FaBox className="text-purple-500 text-3xl"/>

                <h3 className="font-bold mt-4">

                  Meus pedidos

                </h3>

                <p className="text-zinc-400">

                  Acompanhe suas compras.

                </p>


              </div>




              <div className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
              ">


                <FaHeart className="text-purple-500 text-3xl"/>

                <h3 className="font-bold mt-4">

                  Favoritos

                </h3>


                <p className="text-zinc-400">

                  Produtos salvos.

                </p>


              </div>



            </div>


          </main>


        </div>


      </div>


    </Layout>

  );

}