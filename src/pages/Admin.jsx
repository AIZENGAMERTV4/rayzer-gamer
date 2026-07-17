import { useState } from "react";

import Sidebar from "../components/admin/Sidebar";

import Dashboard from "../components/admin/Dashboard";
import ProductTable from "../components/admin/ProductTable";
import AddProduto from "../components/admin/AddProduto";
import Importador from "../components/admin/Importador";

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

            </main>

        </div>

    );

}