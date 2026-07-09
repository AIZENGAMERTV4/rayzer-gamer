import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import { useLoja } from "../../context/LojaContext";
import MiniCarrinho from "../MiniCarrinho";

export default function HeaderIcons() {
  const { carrinho } = useLoja();

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <>
      <div className="flex items-center gap-5">

        {/* Favoritos */}
        <Link
          to="/favoritos"
          className="
            relative
            text-2xl
            text-white
            hover:text-violet-400
            transition
          "
        >
          <FaHeart />
        </Link>

        {/* Carrinho */}
        <button
          onClick={() => setCarrinhoAberto(true)}
          className="
            relative
            text-2xl
            text-white
            hover:text-violet-400
            transition
          "
        >
          <FaShoppingCart />

          {carrinho.length > 0 && (
            <span
              className="
                absolute
                -top-2
                -right-2
                w-5
                h-5
                rounded-full
                bg-violet-600
                flex
                items-center
                justify-center
                text-[11px]
                font-bold
              "
            >
              {carrinho.length}
            </span>
          )}
        </button>

        {/* Usuário */}
        <Link
          to="/login"
          className="
            text-3xl
            text-white
            hover:text-violet-400
            transition
          "
        >
          <FaUserCircle />
        </Link>

      </div>

      <MiniCarrinho
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />
    </>
  );
}