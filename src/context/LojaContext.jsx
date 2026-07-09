import { createContext, useContext, useState } from "react";

const LojaContext = createContext();

export function LojaProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // Adiciona produto ao carrinho
  function adicionarCarrinho(produto) {
    setCarrinho((prev) => {
      const produtoExiste = prev.find((item) => item.id === produto.id);

      if (produtoExiste) {
        return prev.map((item) =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...produto,
          quantidade: 1,
        },
      ];
    });
  }

  // Diminui quantidade
  function diminuirQuantidade(id) {
    setCarrinho((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantidade: item.quantidade - 1,
              }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  // Remove completamente
  function removerCarrinho(id) {
    setCarrinho((prev) =>
      prev.filter((produto) => produto.id !== id)
    );
  }

  // Limpa carrinho
  function limparCarrinho() {
    setCarrinho([]);
  }

  // Total
  const total = carrinho.reduce(
    (valor, produto) =>
      valor + produto.preco * produto.quantidade,
    0
  );

  return (
    <LojaContext.Provider
      value={{
        carrinho,
        adicionarCarrinho,
        diminuirQuantidade,
        removerCarrinho,
        limparCarrinho,
        total,
      }}
    >
      {children}
    </LojaContext.Provider>
  );
}

export function useLoja() {
  return useContext(LojaContext);
}