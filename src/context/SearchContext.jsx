import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [pesquisa, setPesquisa] = useState("");

  return (
    <SearchContext.Provider
      value={{
        pesquisa,
        setPesquisa,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}