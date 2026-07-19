import { useState } from "react";

import Sidebar from "../components/admin/Sidebar";

import Dashboard from "../components/admin/Dashboard";
import ProductTable from "../components/admin/ProductTable";
import AddProduto from "../components/admin/AddProduto";
import Importador from "../components/admin/Importador";
import Pedidos from "../components/admin/Pedidos";

export default function Admin() {

  const [pagina, setPagina] = useState("Dashboard");

  return (

    <div className="flex min-h-screen bg-zinc-950 text-white">

      <Sidebar
        pagina={pagina}
        setPagina={setPagina}
      />

      <main className="flex-1 p-8 overflow-auto">

        <h1 className="text-4xl font-black text-purple-500 mb-8">
          {pagina}
        </h1>

        {pagina === "Dashboard" && (
          <Dashboard />
        )}

        {pagina === "Produtos" && (
          <ProductTable />
        )}

        {pagina === "Adicionar" && (
          <AddProduto />
        )}

        {pagina === "Importar" && (
          <Importador />
        )}

        {pagina === "Pedidos" && (
          <Pedidos />
        )}

        {pagina === "Clientes" && (
          <div className="bg-zinc-900 rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              👥 Clientes
            </h2>

            <p className="text-zinc-400">
              Em breve você poderá visualizar todos os clientes cadastrados.
            </p>
          </div>
        )}

        {pagina === "Cupons" && (
          <div className="bg-zinc-900 rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              🎟 Cupons
            </h2>

            <p className="text-zinc-400">
              Sistema de cupons será implementado em breve.
            </p>
          </div>
        )}

        {pagina === "Configurações" && (
          <div className="bg-zinc-900 rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-3">
              ⚙ Configurações
            </h2>

            <p className="text-zinc-400">
              Área de configurações da loja.
            </p>
          </div>
        )}

      </main>

    </div>

  );

}