import { useLoja } from "../context/LojaContext";
import { FaTrash, FaPlus, FaMinus, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

export default function Carrinho() {
  const {
    carrinho,
    removerCarrinho,
    adicionarCarrinho,
    diminuirQuantidade,
    total,
  } = useLoja();
  const navigate = useNavigate();
  const { user } = useAuth();

  function finalizarCompra() {

  if (!user) {

    navigate("/login", {
      state: {
        from: "/checkout",
      },
    });

    return;
  }

  navigate("/checkout");
}

  return (

<Layout>

    <div className="max-w-7xl mx-auto px-6 py-10 text-white">

      <h1 className="text-5xl font-black mb-10">
        Meu Carrinho
      </h1>

      {carrinho.length === 0 ? (

        <div className="bg-zinc-900 rounded-3xl p-16 border border-zinc-800 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Seu carrinho está vazio
          </h2>

          <p className="text-zinc-400">
            Adicione produtos para continuar.
          </p>

        </div>

      ) : (

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* PRODUTOS */}
          <div className="space-y-6">

            {carrinho.map((produto) => (

              <div
                key={produto.id}
                className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-3xl
                  p-6
                  flex
                  gap-6
                  items-center
                  hover:border-violet-500
                  transition
                "
              >

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="
                    w-36
                    h-36
                    rounded-2xl
                    object-cover
                  "
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {produto.nome}
                  </h2>

                  <p className="text-violet-400 text-2xl font-black mt-2">
                    R$ {produto.preco.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-3 mt-6">

                    <button
  onClick={finalizarCompra}
  className="
    w-full
    mt-8
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-violet-700
    to-fuchsia-600
    text-xl
    font-black
    hover:scale-[1.02]
    transition
  "
>
  Finalizar Compra
</button>

                    <span className="text-xl font-bold w-10 text-center">
                      {produto.quantidade}
                    </span>

                    <button
                      onClick={finalizarCompra}
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-violet-600
                        hover:bg-violet-700
                        transition
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FaPlus />
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removerCarrinho(produto.id)}
                  className="
                    bg-red-600
                    hover:bg-red-700
                    transition
                    p-4
                    rounded-2xl
                  "
                >
                  <FaTrash />
                </button>

              </div>

            ))}

          </div>

          {/* RESUMO */}
          <div
            className="
              sticky
              top-28
              h-fit
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Resumo do Pedido
            </h2>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Subtotal
                </span>

                <span className="font-bold">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-400">
                  Frete
                </span>

                <span className="text-green-400 font-bold">
                  Grátis
                </span>
              </div>

              <div className="border-t border-zinc-700 pt-5 flex justify-between">

                <span className="text-2xl font-bold">
                  Total
                </span>

                <span className="text-3xl text-violet-500 font-black">
                  R$ {total.toFixed(2)}
                </span>

              </div>

            </div>

            <button
  onClick={() => navigate("/checkout")}
  className="
    w-full
    mt-8
    py-4
    rounded-2xl
    bg-gradient-to-r
    from-violet-700
    to-fuchsia-600
    text-xl
    font-black
    hover:scale-[1.02]
    transition
    cursor-pointer
  "
>
  Finalizar Compra
</button>

            <div className="flex items-center justify-center gap-3 mt-6 text-zinc-400">

              <FaShieldAlt className="text-green-500" />

              <span>
                Compra 100% Segura
              </span>

            </div>

          </div>

        </div>

      )}

        </div>

</Layout>

  );
}