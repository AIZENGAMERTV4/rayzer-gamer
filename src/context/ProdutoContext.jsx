import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const ProdutoContext = createContext();

export function ProdutoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  async function carregarProdutos() {
    const { data, error } = await supabase
      .from("produtos")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error(error);
      return;
    }

    setProdutos(data);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function adicionarProduto(produto) {
    const { error } = await supabase
      .from("produtos")
      .insert([produto]);

    if (error) {
      console.error(error);
      return;
    }

    carregarProdutos();
  }

  async function removerProduto(id) {
    const { error } = await supabase
      .from("produtos")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    carregarProdutos();
  }

  async function editarProduto(id, novosDados) {
    const { error } = await supabase
      .from("produtos")
      .update(novosDados)
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    carregarProdutos();
  }

  return (
    <ProdutoContext.Provider
      value={{
        produtos,
        adicionarProduto,
        removerProduto,
        editarProduto,
        carregarProdutos,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}

export function useProdutos() {
  return useContext(ProdutoContext);
}