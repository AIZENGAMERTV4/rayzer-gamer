import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import { useProdutos } from "../context/ProdutoContext";
import { useLoja } from "../context/LojaContext";
import { useSearch } from "../context/SearchContext";

import MiniCarrinho from "./MiniCarrinho";

import logo from "../assets/logo.png";

export default function Header() {
  const { produtos } = useProdutos();
  const { carrinho } = useLoja();
  const { pesquisa, setPesquisa } = useSearch();

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const sugestoes = produtos
    .filter((produto) =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    )
    .slice(0, 6);

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-950/95 shadow-2xl shadow-black/60 backdrop-blur-xl border-b border-zinc-800">

        <div className="max-w-[1700px] mx-auto px-8 xl:px-12">

          {/* Linha Superior */}
          <div className="flex items-center gap-6 py-5">

            {/* Logo */}
            <Link to="/" className="shrink-0">

              <img
                src={logo}
                alt="Rayzer Gamer"
                className="h-25 lg:h-28 object-contain"
              />

            </Link>

            {/* Pesquisa */}
            <div className="flex-1 relative">

              <input
  value={pesquisa}
  onChange={(e) => setPesquisa(e.target.value)}
  placeholder="Pesquisar produtos..."
  style={{ paddingLeft: "50px", paddingRight: "60px" }}
  className="
    w-330
    h-10
    rounded-full
    bg-zinc-900/90
    border
    border-zinc-800
    text-white
    text-base
    placeholder:text-zinc-500
    outline-none
    transition-all
    duration-300
    focus:border-violet-500
    focus:ring-4
    focus:ring-violet-600/20
  "
/>

              <FaSearch
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-violet-500
                  text-xl
                  pointer-events-none
                "
              />

              {pesquisa.length > 0 && sugestoes.length > 0 && (

                <div
                  className="
  absolute
  left-8
  right-8
  top-14
  bg-zinc-900
  border
  border-zinc-800
  rounded-2xl
  overflow-hidden
  shadow-2xl
  z-50
"
                >

                  {sugestoes.map((produto) => (

                    <Link
                      key={produto.id}
                      to={`/produto/${produto.id}`}
                      onClick={() => setPesquisa("")}
                      className="
                        flex
                        items-center
                        gap-4
                        p-4
                        hover:bg-zinc-800
                        transition
                      "
                    >

                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-14 h-14 object-cover rounded-xl"
                      />

                      <div>

                        <h3 className="text-white font-semibold">

                          {produto.nome}

                        </h3>

                        <p className="text-violet-400 font-bold">

                          R$ {produto.preco.toFixed(2)}

                        </p>

                      </div>

                    </Link>

                  ))}

                </div>

              )}

            </div>

                        {/* Favoritos */}
            <Link
              to="/favoritos"
              className="
              w-14
h-14
rounded-full
bg-zinc-900
border
border-zinc-800
flex
items-center
justify-center
text-xl
transition-all
duration-300
hover:bg-violet-600
hover:border-violet-500
hover:scale-110
                
              "
            >
              <FaHeart />
            </Link>

            {/* Carrinho */}
            <button
              onClick={() => setCarrinhoAberto(true)}
              className="
                relative
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-full
                bg-zinc-900
                border
                border-zinc-800
                text-white
                hover:bg-violet-600
                hover:border-violet-500
                transition-all
                duration-300
              "
            >
              <FaShoppingCart />

              {carrinho.length > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    w-5
                    h-5
                    rounded-full
                    bg-red-500
                    text-[10px]
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                >
                  {carrinho.length}
                </span>
              )}
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-2xl
                bg-violet-600
                text-white
                text-2xl
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                shadow-violet-600/30
              "
            >
              <FaUserCircle />
            </Link>

          </div>

          {/* Menu */}
          <nav
className="
hidden
md:flex
items-center
gap-10
py-5
border-t
border-zinc-800
text-[15px]
font-semibold
text-zinc-300
"
>
            <Link className="
relative
hover:text-violet-400
transition
after:absolute
after:left-0
after:-bottom-2
after:h-[2px]
after:w-0
after:bg-violet-500
after:transition-all
hover:after:w-full
"
>
              Início
            </Link>

            <Link to="/catalogo"  to="/"
  className="
    relative
    hover:text-violet-400
    transition
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-violet-500
    after:transition-all
    hover:after:w-full
  "
>
              Catálogo
            </Link>

            <Link to="/catalogo"  to="/"
  className="
    relative
    hover:text-violet-400
    transition
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-violet-500
    after:transition-all
    hover:after:w-full
  "
>
              Headsets
            </Link>

            <Link to="/catalogo"  to="/"
  className="
    relative
    hover:text-violet-400
    transition
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-violet-500
    after:transition-all
    hover:after:w-full
  "
>
              Teclados
            </Link>

            <Link to="/catalogo"  to="/"
  className="
    relative
    hover:text-violet-400
    transition
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-violet-500
    after:transition-all
    hover:after:w-full
  "
>
              Mouse
            </Link>

            <Link to="/catalogo"  to="/"
  className="
    relative
    hover:text-violet-400
    transition
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-violet-500
    after:transition-all
    hover:after:w-full
  "
>
              Promoções
            </Link>
          </nav>

        </div>

      </header>

      <MiniCarrinho
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />
    </>
  );
}