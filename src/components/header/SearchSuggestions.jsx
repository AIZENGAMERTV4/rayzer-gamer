import { Link } from "react-router-dom";

export default function SearchSuggestions({
  sugestoes,
  limparPesquisa,
}) {
  return (
    <div
      className="
        absolute
        top-full
        mt-3
        left-0
        right-0
        rounded-2xl
        overflow-hidden
        border
        border-zinc-800
        bg-zinc-900/95
        backdrop-blur-xl
        shadow-2xl
        z-50
      "
    >
      {sugestoes.map((produto) => (
        <Link
          key={produto.id}
          to={`/produto/${produto.id}`}
          onClick={limparPesquisa}
          className="
            flex
            items-center
            gap-4
            p-4
            hover:bg-zinc-800
            transition-all
            duration-300
          "
        >
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="
              w-14
              h-14
              rounded-xl
              object-cover
            "
          />

          <div>
            <h3 className="font-semibold text-white">
              {produto.nome}
            </h3>

            <p className="text-cyan-400 font-bold">
              R$ {produto.preco.toFixed(2)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}