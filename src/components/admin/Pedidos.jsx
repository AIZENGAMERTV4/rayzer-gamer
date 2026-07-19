import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import DetalhesPedido from "./DetalhesPedido";

import {
  Eye,
  Printer,
  Package,
  CreditCard,
  Calendar,
  User,
} from "lucide-react";

export default function Pedidos() {

  const [pedidos, setPedidos] = useState([]);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  async function carregarPedidos() {

    const { data, error } = await supabase
      .from("pedidos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setPedidos(data);

  }

  useEffect(() => {
    carregarPedidos();
  }, []);

  function corPagamento(status) {

    switch (status) {

      case "Pago":
        return "bg-green-600";

      case "Pendente":
      case "Aguardando":
        return "bg-yellow-500 text-black";

      case "Cancelado":
        return "bg-red-600";

      default:
        return "bg-zinc-700";

    }

  }

  function corPedido(status) {

    switch (status) {

      case "Novo":
        return "bg-blue-600";

      case "Preparando":
        return "bg-orange-500";

      case "Enviado":
        return "bg-purple-600";

      case "Concluído":
        return "bg-green-600";

      case "Cancelado":
        return "bg-red-600";

      default:
        return "bg-zinc-700";

    }

  }

  return (

    <>

      <div>

        <h2 className="text-3xl font-bold mb-8">
          📦 Pedidos ({pedidos.length})
        </h2>

        <div className="space-y-6">

          {pedidos.length === 0 && (

            <div className="bg-zinc-900 rounded-2xl p-10 text-center text-zinc-400">

              Nenhum pedido encontrado.

            </div>

          )}

          {pedidos.map((pedido) => (

            <div
              key={pedido.id}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 hover:border-purple-600 transition"
            >

              <div className="flex justify-between items-start flex-wrap gap-5">

                <div>

                  <h3 className="text-2xl font-bold flex items-center gap-2">

                    <Package size={22} />

                    {pedido.numero}

                  </h3>

                  <div className="mt-4 space-y-2 text-zinc-300">

                    <p className="flex items-center gap-2">

                      <User size={18} />

                      {pedido.cliente_nome}

                    </p>

                    <p className="flex items-center gap-2">

                      <Calendar size={18} />

                      {pedido.created_at
                        ? new Date(pedido.created_at).toLocaleString("pt-BR")
                        : "-"}

                    </p>

                    <p className="flex items-center gap-2">

                      <CreditCard size={18} />

                      R$ {Number(pedido.total).toFixed(2)}

                    </p>

                  </div>

                </div>

                <div className="flex flex-col gap-3">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white text-center ${corPagamento(
                      pedido.status_pagamento
                    )}`}
                  >
                    {pedido.status_pagamento}
                  </span>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white text-center ${corPedido(
                      pedido.status_pedido
                    )}`}
                  >
                    {pedido.status_pedido}
                  </span>

                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => setPedidoSelecionado(pedido)}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl transition"
                >

                  <Eye size={18} />

                  Ver detalhes

                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-5 py-3 rounded-xl transition"
                >

                  <Printer size={18} />

                  Imprimir

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      <DetalhesPedido
        pedido={pedidoSelecionado}
        fechar={() => setPedidoSelecionado(null)}
      />

    </>

  );

}