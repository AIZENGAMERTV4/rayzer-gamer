import { useState } from "react";
import { useProdutos } from "../context/ProdutoContext";
import { supabase } from "../lib/supabase";

export default function AddProduto() {
  const { adicionarProduto } = useProdutos();

  const [produto, setProduto] = useState({
  nome: "",
  categoria: "",
  marca: "",
  preco: "",
  descricao: "",
  estoque: "",
  avaliacao: 5,
  promocao: false,
  destaque: false,
});

const [imagens, setImagens] = useState([]);
const [preview, setPreview] = useState([]);

  function alterarCampo(e) {
    const { name, value } = e.target;

    setProduto({
      ...produto,
      [name]: value,
    });
  }

  function escolherImagens(e) {
  const arquivos = Array.from(e.target.files);

  setImagens(arquivos);

  const previews = arquivos.map((arquivo) =>
    URL.createObjectURL(arquivo)
  );

  setPreview(previews);
}

  async function cadastrar(e) {
  e.preventDefault();

  const urlsImagens = [];

  for (const arquivo of imagens) {
    const extensao = arquivo.name.split(".").pop();

const nomeArquivo =
  `${Date.now()}-${Math.random().toString(36).substring(2)}.${extensao}`;

    const { error: uploadError } = await supabase.storage
      .from("produtos")
      .upload(nomeArquivo, arquivo);

    if (uploadError) {
  console.error(uploadError);
  alert(uploadError.message);
  return;
}

    const { data } = supabase.storage
      .from("produtos")
      .getPublicUrl(nomeArquivo);

    urlsImagens.push(data.publicUrl);
  }

  await adicionarProduto({
    nome: produto.nome,
    categoria: produto.categoria,
    marca: produto.marca,
    preco: Number(produto.preco),
    descricao: produto.descricao,
    estoque: Number(produto.estoque),
    avaliacao: Number(produto.avaliacao),
    promocao: produto.promocao,
    destaque: produto.destaque,
    imagens: urlsImagens,
  });

  setProduto({
    nome: "",
    categoria: "",
    marca: "",
    preco: "",
    descricao: "",
    estoque: "",
    avaliacao: 5,
    promocao: false,
    destaque: false,
  });

  setImagens([]);
  setPreview([]);

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
  multiple
  accept="image/*"
  onChange={escolherImagens}
  className="w-full bg-zinc-800 p-3 rounded-xl"
/>

<input
  name="marca"
  value={produto.marca}
  onChange={alterarCampo}
  placeholder="Marca"
  className="w-full bg-zinc-800 p-3 rounded-xl"
/>

<input
  name="avaliacao"
  type="number"
  min="1"
  max="5"
  value={produto.avaliacao}
  onChange={alterarCampo}
  className="w-full bg-zinc-800 p-3 rounded-xl"
/>

<label className="flex items-center gap-3">
  <input
    type="checkbox"
    checked={produto.promocao}
    onChange={(e) =>
      setProduto({
        ...produto,
        promocao: e.target.checked,
      })
    }
  />
  Produto em promoção
</label>

<label className="flex items-center gap-3">
  <input
    type="checkbox"
    checked={produto.destaque}
    onChange={(e) =>
      setProduto({
        ...produto,
        destaque: e.target.checked,
      })
    }
  />
  Produto em destaque
</label>

      {preview.length > 0 && (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {preview.map((img, index) => (
      <img
        key={index}
        src={img}
        alt=""
        className="h-32 w-full object-cover rounded-xl border border-zinc-700"
      />
    ))}
  </div>
)}

      <button
        className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-bold"
      >
        Adicionar Produto
      </button>
    </form>
  );
}