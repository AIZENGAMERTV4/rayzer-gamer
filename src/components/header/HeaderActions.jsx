import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import GlowIcon from "../ui/GlowIcon";

import { useLoja } from "../../context/LojaContext";
import { useAuth } from "../../context/AuthContext";


export default function HeaderActions({
  abrirCarrinho,
}) {


  const { carrinho } = useLoja();

  const { user } = useAuth();



  const nome =
    user?.user_metadata?.nome ||
    "Conta";



  return (

    <div className="flex items-center gap-2 sm:gap-3">


      {/* FAVORITOS */}

      <Link to="/favoritos">

        <GlowIcon>

          <FaHeart size={18} />

        </GlowIcon>

      </Link>




      {/* CARRINHO */}

      <GlowIcon
        onClick={abrirCarrinho}
        badge={carrinho.length}
      >

        <FaShoppingCart size={18} />

      </GlowIcon>





      {/* USUARIO */}

      <Link
        to={user ? "/minha-conta" : "/login"}
        className="
        flex
        items-center
        gap-2
        "
      >


        <GlowIcon>

          <FaUserCircle size={18} />

        </GlowIcon>



        <div className="
          hidden
          xl:block
          text-left
        ">


          <p className="
            text-xs
            text-zinc-400
          ">

            {user
              ? "Olá,"
              : "Entrar"}

          </p>



          {user && (

            <p className="
              text-sm
              font-bold
              max-w-[100px]
              truncate
            ">

              {nome}

            </p>

          )}


        </div>



      </Link>



    </div>

  );

}