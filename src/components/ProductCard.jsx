import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useLoja } from "../context/LojaContext";

export default function ProductCard({ produto }) {
  const { adicionarCarrinho } = useLoja();

  return (
    <div
      className="
        group
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500
        hover:shadow-2xl
        hover:shadow-violet-900/40
      "
    >
      {/* Imagem */}
      <div className="relative overflow-hidden bg-black">

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
            bg-black/70
            backdrop-blur
            flex
            items-center
            justify-center
            text-white
            hover:bg-violet-600
            transition
          "
        >
          <FaHeart />
        </button>

      </div>

      {/* Conteúdo */}

      <div className="p-6">

        <span className="
          text-xs
          uppercase
          tracking-widest
          text-violet-400
          font-semibold
        ">
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

        <div className="flex gap-1 mt-4 text-yellow-400">

          {Array.from({
            length: produto.avaliacao,
          }).map((_, index) => (
            <FaStar key={index} />
          ))}

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