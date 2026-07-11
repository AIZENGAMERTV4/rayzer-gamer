import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useLoja } from "../context/LojaContext";

export default function ProductCard({ produto }) {
  const { adicionarCarrinho } = useLoja();

  return (
    <div
      className="
group
relative
overflow-hidden
rounded-3xl
border
border-zinc-800
bg-gradient-to-b
from-zinc-900
to-zinc-950
transition-all
duration-500
hover:-translate-y-3
hover:border-violet-500
hover:shadow-[0_0_45px_rgba(124,58,237,.30)]
"
    >
      {/* Imagem */}
      <div className="
relative
overflow-hidden

bg-gradient-to-br
from-zinc-950
via-zinc-900
to-violet-950/30
">

        <Link to={`/produto/${produto.id}`}>

          <img
            src={produto.imagem}
            alt={produto.nome}
            className="
              w-full
              h-44 sm:h-52 lg:h-60
              object-contain
              p-4 sm:p-6
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          <div
className="
absolute
bottom-0
left-0
w-full
h-20

bg-gradient-to-t
from-black
to-transparent
opacity-50
"/>

        </Link>

        {produto.promocao && (
          <span
            className="
              absolute
              top-4
              left-4
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-4
              py-2
              rounded-full
              text-xs
              font-bold
              text-white
              shadow-lg
            "
          >
            🔥 OFERTA
          </span>
        )}

        <button
          className="
absolute
top-4
right-4

w-11
h-11

rounded-full

bg-zinc-900/80

backdrop-blur-xl

border
border-zinc-700

flex
items-center
justify-center

text-white

transition-all
duration-300

hover:bg-red-500
hover:scale-110
"
        >
          <FaHeart />
        </button>

      </div>

      {/* Conteúdo */}

      <div className="p-6">

        <span
  className="
    inline-block
    px-3
    py-1
    rounded-full
    bg-violet-600/20
    border
    border-violet-500/20
    text-violet-300
    text-xs
    font-bold
    uppercase
    tracking-wider
  "
>
  {produto.categoria}
</span>

        <Link to={`/produto/${produto.id}`}>

          <h3
            className="
              text-white
              text-base md:text-lg
              font-bold
              mt-3
              h-14
              hover:text-violet-400
              transition
            "
          >
            {produto.nome}
          </h3>

        </Link>

  <div className="flex items-center gap-1 mt-5">

  <div className="flex text-yellow-400">

    {Array.from({
      length: produto.avaliacao,
    }).map((_, index) => (
      <FaStar key={index} />
    ))}

  </div>

  <span className="text-zinc-500 text-sm ml-2">
    (245)
  </span>

</div>

        <div className="mt-5">

          <p className="
            text-2xl md:text-3xl
            font-black
            text-white
          ">
            R$ {produto.preco.toFixed(2)}
          </p>

        </div>

        <button
          onClick={() => adicionarCarrinho(produto)}
          className="
            w-full
            mt-5
            py-3 md:py-4
            rounded-2xl
            font-bold
            text-white
            bg-gradient-to-r
            from-violet-600
            to-fuchsia-600
            hover:scale-[1.03]
            transition-all
            duration-300
            flex
            items-center
            justify-center
            gap-3
            shadow-lg
            shadow-violet-700/30
          "
        >
          <FaShoppingCart />

          Adicionar ao Carrinho

        </button>

      </div>

    </div>
  );
}