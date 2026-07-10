import { useState } from "react";
import { useProdutos } from "../context/ProdutoContext";

export default function AddProduto() {
  const { adicionarProduto } = useProdutos();

  const [produto, setProduto] = useState({
    nome: "",
    categoria: "",
    preco: "",
    descricao: "",
    estoque: "",
    imagem: "",
  });

  function alterarCampo(e) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: value,
    });
  }

  function escolherImagem(e) {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = () => {
      setProduto({
        ...produto,
        imagem: leitor.result,
      });
    };

    leitor.readAsDataURL(arquivo);
  }

  async function cadastrar(e) {
    e.preventDefault();

    await adicionarProduto({
      nome: produto.nome,
      categoria: produto.categoria,
      preco: Number(produto.preco),
      descricao: produto.descricao,
      estoque: Number(produto.estoque),
      imagem: produto.imagem,
    });

    setProduto({
      nome: "",
      categoria: "",
      preco: "",
      descricao: "",
      estoque: "",
      imagem: "",
    });

    alert("Produto cadastrado com sucesso!");
  }

  return (
    <form
      onSubmit={cadastrar}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 space-y-4"
    >
      <h2 className="text-2xl font-bold">
        Adicionar Produto
      </h2>

      <input
        name="nome"
        value={produto.nome}
        onChange={alterarCampo}
        placeholder="Nome do produto"
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      <input
        name="categoria"
        value={produto.categoria}
        onChange={alterarCampo}
        placeholder="Categoria"
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      <input
        name="preco"
        type="number"
        value={produto.preco}
        onChange={alterarCampo}
        placeholder="Preço"
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      <input
        name="estoque"
        type="number"
        value={produto.estoque}
        onChange={alterarCampo}
        placeholder="Estoque"
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      <textarea
        name="descricao"
        value={produto.descricao}
        onChange={alterarCampo}
        placeholder="Descrição do produto"
        rows={4}
        className="w-full bg-zinc-800 p-3 rounded-xl resize-none"
      />

      <input
        type="file"
        accept="image/*"
        onChange={escolherImagem}
        className="w-full bg-zinc-800 p-3 rounded-xl"
      />

      {produto.imagem && (
        <img
          src={produto.imagem}
          alt="Preview"
          className="h-40 rounded-xl object-cover"
        />
      )}

      <button
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-bold"
      >
        Adicionar Produto
      </button>
    </form>
  );
}