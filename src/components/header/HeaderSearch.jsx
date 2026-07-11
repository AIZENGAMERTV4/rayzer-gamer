import { Link } from "react-router-dom";

import SearchInput from "../ui/SearchInput";
import SearchSuggestions from "./SearchSuggestions";

import { useProdutos } from "../../context/ProdutoContext";
import { useSearch } from "../../context/SearchContext";

export default function HeaderSearch() {
  const { produtos } = useProdutos();
  const { pesquisa, setPesquisa } = useSearch();

  const sugestoes = produtos
    .filter((produto) =>
      produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
    )
    .slice(0, 6);

  return (
    <div className="flex-1 relative">
      <SearchInput
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      {pesquisa.length > 0 && sugestoes.length > 0 && (
        <SearchSuggestions
          sugestoes={sugestoes}
          limparPesquisa={() => setPesquisa("")}
        />
      )}
    </div>
  );
}