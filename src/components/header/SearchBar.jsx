import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useProdutos } from "../../context/ProdutoContext";
import { useSearch } from "../../context/SearchContext";

export default function SearchBar() {
  const { pesquisa, setPesquisa } = useSearch();
  const { produtos } = useProdutos();

  const sugestoes = produtos
    .filter((produto) =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    )
    .slice(0, 6);

  return (
    <div className="flex-1 relative">

      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-violet-500
        "
      />

      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquisar produtos..."
        className="
          w-full
          h-12
          bg-zinc-900
          border
          border-zinc-700
          rounded-2xl
          pl-12
          pr-4
          text-white
          outline-none
          transition
          focus:border-violet-500
          focus:ring-2
          focus:ring-violet-600/30
        "
      />

      {pesquisa.length > 0 && sugestoes.length > 0 && (

        <div
          className="
            absolute
            top-14
            left-0
            right-0
            bg-zinc-900
            border
            border-zinc-700
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
                className="
                  w-14
                  h-14
                  rounded-lg
                  object-cover
                "
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
  );
}