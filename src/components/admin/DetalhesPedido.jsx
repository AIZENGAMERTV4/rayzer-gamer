import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { X } from "lucide-react";

export default function DetalhesPedido({
  pedido,
  fechar,
}) {
  if (!pedido) return null;

  const [status, setStatus] = useState(
    pedido.status_pedido || "Novo"
  );

  async function salvarStatus(novoStatus) {
    setStatus(novoStatus);

    const { error } = await supabase
      .from("pedidos")
      .update({
        status_pedido: novoStatus,
      })
      .eq("id", pedido.id);

    if (error) {
      console.error(error);
      alert("Erro ao atualizar status.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-zinc-900 rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-auto border border-zinc-800">

        <div className="flex justify-between items-center p-8 border-b border-zinc-800">

          <div>

            <h2 className="text-3xl font-black">

              Pedido {pedido.numero}

            </h2>

            <p className="text-zinc-400 mt-1">

              {pedido.created_at
                ? new Date(
                    pedido.created_at
                  ).toLocaleString("pt-BR")
                : ""}

            </p>

          </div>

          <button
            onClick={fechar}
            className="hover:text-red-500 transition"
          >
            <X size={32} />
          </button>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-8">

          <div className="bg-zinc-950 rounded-2xl p-6">

            <h3 className="text-xl font-bold mb-5">

              👤 Cliente

            </h3>

            <div className="space-y-3 text-zinc-300">

              <p><b>Nome:</b> {pedido.cliente_nome}</p>

              <p><b>Email:</b> {pedido.email}</p>

              <p><b>CPF:</b> {pedido.cpf}</p>

              <p><b>Telefone:</b> {pedido.telefone}</p>

            </div>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-6">

            <h3 className="text-xl font-bold mb-5">

              📍 Endereço

            </h3>

            <div className="space-y-3 text-zinc-300">

              <p>{pedido.rua}</p>

              <p>Nº {pedido.numero_casa}</p>

              <p>{pedido.complemento}</p>

              <p>{pedido.cidade}</p>

              <p>{pedido.estado}</p>

              <p>CEP: {pedido.cep}</p>

            </div>

          </div>

        </div>

        <div className="px-8">

          <div className="bg-zinc-950 rounded-2xl p-6">

            <h3 className="text-xl font-bold mb-5">

              🛒 Produtos

            </h3>

            {Array.isArray(pedido.produtos) ? (

              <div className="space-y-4">

                {pedido.produtos.map((produto, index) => (

                  <div
                    key={index}
                    className="flex justify-between border-b border-zinc-800 pb-4"
                  >

                    <div>

                      <p className="font-bold">
                        {produto.nome}
                      </p>

                      <p className="text-zinc-400">

                        Quantidade:
                        {" "}
                        {produto.quantidade}

                      </p>

                    </div>

                    <div className="font-bold text-purple-400">

                      R$
                      {" "}
                      {Number(
                        produto.preco
                      ).toFixed(2)}

                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <pre className="text-zinc-400 text-sm whitespace-pre-wrap">

                {JSON.stringify(
                  pedido.produtos,
                  null,
                  2
                )}

              </pre>

            )}

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-8">

          <div className="bg-zinc-950 rounded-2xl p-6">

            <h3 className="text-xl font-bold mb-5">

              📦 Status do Pedido

            </h3>

            <select
              value={status}
              onChange={(e) =>
                salvarStatus(e.target.value)
              }
              className="w-full bg-zinc-800 rounded-xl p-4 border border-zinc-700"
            >

              <option>Novo</option>

              <option>Preparando</option>

              <option>Enviado</option>

              <option>Concluído</option>

              <option>Cancelado</option>

            </select>

          </div>

          <div className="bg-zinc-950 rounded-2xl p-6">

            <h3 className="text-xl font-bold mb-5">

              💰 Resumo

            </h3>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between">

                <span>Pagamento</span>

                <b>

                  {pedido.status_pagamento}

                </b>

              </div>

              <div className="flex justify-between">

                <span>Total</span>

                <b className="text-purple-500 text-3xl">

                  R$
                  {" "}
                  {Number(
                    pedido.total
                  ).toFixed(2)}

                </b>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}