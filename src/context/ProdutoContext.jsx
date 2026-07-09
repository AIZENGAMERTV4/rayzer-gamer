import { createContext, useContext, useState } from "react";
import produtosIniciais from "../data/produtos";


const ProdutoContext = createContext();


export function ProdutoProvider({ children }) {


  const [produtos, setProdutos] = useState(() => {

    const produtosSalvos =
      localStorage.getItem("produtos");


    return produtosSalvos
      ? JSON.parse(produtosSalvos)
      : produtosIniciais;

  });



  function salvarProdutos(novosProdutos) {

    setProdutos(novosProdutos);

    localStorage.setItem(
      "produtos",
      JSON.stringify(novosProdutos)
    );

  }




  function adicionarProduto(produto) {


    const novaLista = [

      ...produtos,

      {
        ...produto,
        id: Date.now(),
      },

    ];


    salvarProdutos(novaLista);

  }





  function removerProduto(id) {


    const novaLista =
      produtos.filter(
        (produto) =>
          produto.id !== id
      );


    salvarProdutos(novaLista);

  }





  function editarProduto(id, novosDados) {


    const novaLista =
      produtos.map((produto) =>

        produto.id === id

        ? {
            ...produto,
            ...novosDados,
          }

        : produto

      );


    salvarProdutos(novaLista);

  }





  return (

    <ProdutoContext.Provider

      value={{
        produtos,
        adicionarProduto,
        removerProduto,
        editarProduto,
      }}

    >

      {children}

    </ProdutoContext.Provider>

  );

}




export function useProdutos() {

  return useContext(ProdutoContext);

}