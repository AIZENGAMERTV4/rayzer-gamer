import { useState } from "react";

import Sidebar from "./components/Sidebar";

import AddProduto from "./AddProduto";
import EditProduto from "./EditProduto";
import ImportarCatalogo from "./ImportarCatalogo";

import { useProdutos } from "../context/ProdutoContext";
import { useAuth } from "../context/AuthContext";

export default function AdminPanel() {

    const { produtos, removerProduto, editarProduto } = useProdutos();
    const { logout } = useAuth();

    const [pagina, setPagina] = useState("Dashboard");
    const [produtoEditando, setProdutoEditando] = useState(null);

    const totalCategorias = new Set(
        produtos.map((p) => p.categoria)
    ).size;

    const valorEstoque = produtos.reduce(
        (t, p) => t + (p.preco * p.estoque),
        0
    );

    return (

        <div className="flex h-screen bg-zinc-950 text-white">

            <Sidebar
                pagina={pagina}
                setPagina={setPagina}
                logout={logout}
            />

            <main className="flex-1 overflow-auto p-8">

                <h1 className="text-4xl font-black mb-8">
                    {pagina}
                </h1>

                {pagina === "Dashboard" && (

                    <>
                        <div className="grid lg:grid-cols-3 gap-6">

                            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                                <p className="text-zinc-400">
                                    Produtos
                                </p>

                                <h2 className="text-5xl font-black text-violet-500">
                                    {produtos.length}
                                </h2>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                                <p className="text-zinc-400">
                                    Categorias
                                </p>

                                <h2 className="text-5xl font-black text-cyan-400">
                                    {totalCategorias}
                                </h2>
                            </div>

                            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                                <p className="text-zinc-400">
                                    Valor do estoque
                                </p>

                                <h2 className="text-4xl font-black text-green-400">
                                    R$ {valorEstoque.toFixed(2)}
                                </h2>
                            </div>

                        </div>
                    </>

                )}

                {pagina === "Adicionar" && (
                    <AddProduto />
                )}

                {pagina === "Importar" && (
                    <ImportarCatalogo />
                )}

                {pagina === "Produtos" && (

                    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">

                        <table className="w-full">

                            <thead className="bg-zinc-800">

                                <tr>
                                    <th className="p-4 text-left">
                                        Produto
                                    </th>

                                    <th>
                                        Categoria
                                    </th>

                                    <th>
                                        Preço
                                    </th>

                                    <th>
                                        Estoque
                                    </th>

                                    <th>
                                        Ações
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {produtos.map((produto) => (

                                    <tr
                                        key={produto.id}
                                        className="border-t border-zinc-800"
                                    >

                                        <td className="p-4">
                                            {produto.nome}
                                        </td>

                                        <td className="text-center">
                                            {produto.categoria}
                                        </td>

                                        <td className="text-center text-violet-400 font-bold">
                                            R$ {produto.preco.toFixed(2)}
                                        </td>

                                        <td className="text-center">
                                            {produto.estoque}
                                        </td>

                                        <td className="flex justify-center gap-2 p-3">

                                            <button
                                                onClick={() => setProdutoEditando(produto)}
                                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() => removerProduto(produto.id)}
                                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                                            >
                                                Remover
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

                {pagina === "Imagens" && (

                    <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

                        <h2 className="text-3xl font-bold mb-3">
                            Em breve
                        </h2>

                        <p className="text-zinc-400">
                            Aqui ficará o gerenciador de imagens da loja.
                        </p>

                    </div>

                )}

                {pagina === "Configurações" && (

                    <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

                        <h2 className="text-3xl font-bold mb-3">
                            Configurações
                        </h2>

                        <p className="text-zinc-400">
                            Em breve.
                        </p>

                    </div>

                )}

                {produtoEditando && (

                    <EditProduto
                        produto={produtoEditando}
                        salvar={(dados) => {

                            editarProduto(produtoEditando.id, dados);
                            setProdutoEditando(null);

                        }}
                        cancelar={() => setProdutoEditando(null)}
                    />

                )}

            </main>

        </div>

    );

}