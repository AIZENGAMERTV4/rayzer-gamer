import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoja } from "../context/LojaContext";

export default function MiniCarrinho({
  aberto,
  fechar,
}) {

  const {
    carrinho,
    removerCarrinho,
  } = useLoja();

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco,
    0
  );

  return (
    <>
      {/* Fundo */}
      <div
        onClick={fechar}
        className={`
          fixed
          inset-0
          bg-black/60
          transition-all
          z-40
          ${
            aberto
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Painel */}
      <aside
        className={`
          fixed
          right-0
          top-0
          h-screen
          w-[380px]
          bg-zinc-950
          border-l
          border-zinc-800
          z-50
          transition-all
          duration-300
          ${
            aberto
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        <div className="p-6 flex justify-between items-center border-b border-zinc-800">

          <h2 className="text-2xl font-bold text-white">
            🛒 Meu Carrinho
          </h2>

          <button
            onClick={fechar}
            className="text-white text-xl"
          >
            <FaTimes />
          </button>

        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">

          {carrinho.length === 0 && (
            <p className="text-zinc-400">
              Seu carrinho está vazio.
            </p>
          )}

          {carrinho.map((produto) => (

            <div
              key={produto.id}
              className="
                flex
                gap-4
                border-b
                border-zinc-800
                pb-4
              "
            >

              <img
                src={produto.imagem}
                className="
                  w-20
                  h-20
                  rounded-xl
                  object-cover
                "
              />

              <div className="flex-1">

                <h3 className="text-white font-semibold">
                  {produto.nome}
                </h3>

                <p className="text-violet-400 font-bold">
                  R$ {produto.preco.toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    removerCarrinho(produto.id)
                  }
                  className="text-red-500 text-sm mt-2"
                >
                  Remover
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="p-6 border-t border-zinc-800">

          <div className="flex justify-between text-white text-xl font-bold mb-6">

            <span>Total</span>

            <span>
              R$ {total.toFixed(2)}
            </span>

          </div>

          <Link
            to="/carrinho"
            onClick={fechar}
            className="
              w-full
              block
              bg-violet-600
              hover:bg-violet-700
              py-4
              rounded-xl
              text-center
              font-bold
              transition
            "
          >
            Ir para o Carrinho
          </Link>

        </div>

      </aside>
    </>
  );
}