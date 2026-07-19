import { useState } from "react";
import { useLoja } from "../context/LojaContext";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabase";

export default function Checkout() {
  const { carrinho } = useLoja();

  const [carregando, setCarregando] = useState(false);

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
  });

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  async function pagar() {
  try {
    setCarregando(true);
    // Gerar número do pedido
const numeroPedido =
  "RG-" + Date.now();

// Salvar pedido
const { data: pedido, error: erroPedido } = await supabase
  .from("pedidos")
  .insert([
    {
      numero: numeroPedido,

      cliente_nome: cliente.nome,
      cliente_email: cliente.email,
      cliente_cpf: cliente.cpf,
      cliente_telefone: cliente.telefone,

      cep: cliente.cep,
      rua: cliente.rua,
      numero_endereco: cliente.numero,
      complemento: cliente.complemento,
      cidade: cliente.cidade,
      estado: cliente.estado,

      itens: carrinho,

      subtotal: total,
      frete: 0,
      total: total,

      status_pagamento: "Aguardando",
      status_pedido: "Novo",
    },
  ])
  .select()
  .single();

if (erroPedido) {
  console.error(erroPedido);
  alert("Erro ao salvar pedido.");
  return;
}

    const response = await fetch("/api/create-preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cliente,
        items: carrinho.map((produto) => ({
          id: String(produto.id),
          title: produto.nome,
          quantity: produto.quantidade,
          unit_price: Number(produto.preco),
          currency_id: "BRL",
        })),
      }),
    });

    const data = await response.json();

    console.log("RESPOSTA MERCADO PAGO:", data);

    if (!response.ok) {
      throw new Error(data.message || "Erro ao criar pagamento");
    }

    if (!data.init_point) {
      throw new Error("Mercado Pago não retornou link de pagamento");
    }

    window.location.href = data.init_point;

  } catch (erro) {
    console.error("ERRO PAGAMENTO:", erro);

    alert(
      erro instanceof Error
        ? erro.message
        : "Erro ao iniciar pagamento."
    );

  } finally {
    setCarregando(false);
  }
}

  return (

<Layout>

    <div className="max-w-7xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-black mb-10">
        Finalizar Compra
      </h1>

      <div className="grid lg:grid-cols-[1fr_420px] gap-10">

              {/* DADOS DO CLIENTE */}
        <div className="space-y-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Dados do Cliente
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="Nome Completo"
                value={cliente.nome}
                onChange={(e) =>
                  setCliente({ ...cliente, nome: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="CPF"
                value={cliente.cpf}
                onChange={(e) =>
                  setCliente({ ...cliente, cpf: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Email"
                value={cliente.email}
                onChange={(e) =>
                  setCliente({ ...cliente, email: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Telefone"
                value={cliente.telefone}
                onChange={(e) =>
                  setCliente({ ...cliente, telefone: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

            </div>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Endereço de Entrega
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                placeholder="CEP"
                value={cliente.cep}
                onChange={(e) =>
                  setCliente({ ...cliente, cep: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Rua"
                value={cliente.rua}
                onChange={(e) =>
                  setCliente({ ...cliente, rua: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Número"
                value={cliente.numero}
                onChange={(e) =>
                  setCliente({ ...cliente, numero: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Complemento"
                value={cliente.complemento}
                onChange={(e) =>
                  setCliente({ ...cliente, complemento: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Cidade"
                value={cliente.cidade}
                onChange={(e) =>
                  setCliente({ ...cliente, cidade: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

              <input
                placeholder="Estado"
                value={cliente.estado}
                onChange={(e) =>
                  setCliente({ ...cliente, estado: e.target.value })
                }
                className="bg-zinc-800 rounded-xl p-4 outline-none border border-zinc-700 focus:border-violet-500"
              />

            </div>

          </div>

        </div>
                {/* RESUMO DO PEDIDO */}
        <div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sticky top-28">

            <h2 className="text-3xl font-bold mb-8">
              Resumo do Pedido
            </h2>

            {carrinho.length === 0 ? (

              <p className="text-zinc-400">
                Seu carrinho está vazio.
              </p>

            ) : (

              <div className="space-y-4">

                {carrinho.map((produto) => (

                  <div
                    key={produto.id}
                    className="flex justify-between items-center border-b border-zinc-800 pb-4"
                  >

                    <div>

                      <h3 className="font-bold">
                        {produto.nome}
                      </h3>

                      <p className="text-zinc-500 text-sm">
                        Quantidade: {produto.quantidade}
                      </p>

                    </div>

                    <span className="font-bold text-violet-400">
                      R$ {(produto.preco * produto.quantidade).toFixed(2)}
                    </span>

                  </div>

                ))}

              </div>

            )}

            <div className="border-t border-zinc-800 mt-8 pt-8">

              <div className="flex justify-between text-xl">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mt-3">
                <span className="text-zinc-400">Frete</span>
                <span className="text-green-400 font-bold">
                  Grátis
                </span>
              </div>

              <div className="flex justify-between mt-8 text-3xl font-black">
                <span>Total</span>
                <span className="text-violet-500">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={pagar}
                disabled={carregando || carrinho.length === 0}
                className="
                  w-full
                  mt-8
                  py-5
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-700
                  to-fuchsia-600
                  hover:from-violet-600
                  hover:to-fuchsia-500
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  font-black
                  text-xl
                  transition-all
                  duration-300
                "
              >
                {carregando
                  ? "Processando pagamento..."
                  : "Pagar com Mercado Pago"}
              </button>

              <p className="text-center text-zinc-500 text-sm mt-5">
                🔒 Pagamento protegido pelo Mercado Pago
              </p>

            </div>

          </div>

        </div>

          </div>
          </div>

</Layout>

  );
}