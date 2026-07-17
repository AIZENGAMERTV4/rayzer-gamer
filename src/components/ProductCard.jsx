import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useLoja } from "../context/LojaContext";

export default function ProductCard({ produto }) {
  const { adicionarCarrinho } = useLoja();

  const imagem =
    Array.isArray(produto.imagens) && produto.imagens.length > 0
      ? produto.imagens[0]
      : "/sem-imagem.png";

  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2">

      <Link to={`/produto/${produto.id}`}>
        <div className="bg-zinc-950 h-64 flex items-center justify-center p-6">
          <img
            src={imagem}
            alt={produto.nome}
            className="max-h-full object-contain transition duration-300 hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-5">

        <span className="text-xs bg-violet-600/20 text-violet-300 px-3 py-1 rounded-full">
          {produto.categoria}
        </span>

        <Link to={`/produto/${produto.id}`}>
          <h2 className="text-white font-bold text-lg mt-3 min-h-[56px] hover:text-violet-400 transition">
            {produto.nome}
          </h2>
        </Link>

        <div className="flex items-center mt-3 gap-1 text-yellow-400">
          {[1,2,3,4,5].map((i)=>(
            <FaStar key={i} size={14}/>
          ))}
        </div>

        <h3 className="text-3xl font-black text-cyan-400 mt-5">
          R$ {Number(produto.preco).toFixed(2)}
        </h3>

        <div className="flex gap-3 mt-5">

          <button
            onClick={() => adicionarCarrinho(produto)}
            className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            <div className="flex justify-center items-center gap-2">
              <FaShoppingCart />
              Comprar
            </div>
          </button>

          <button
            className="w-12 rounded-xl bg-zinc-800 hover:bg-red-500 transition flex items-center justify-center"
          >
            <FaHeart />
          </button>

        </div>

      </div>

    </div>
  );
}