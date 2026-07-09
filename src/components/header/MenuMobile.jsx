import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function MenuMobile({
  aberto,
  fechar,
}) {
  return (
    <>
      {/* Fundo */}
      <div
        onClick={fechar}
        className={`
          fixed inset-0 bg-black/60 z-40 transition-all
          ${aberto ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Menu */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          bg-zinc-950
          border-r
          border-zinc-800
          z-50
          transition-all
          duration-300
          ${
            aberto
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">

          <h2 className="text-xl font-bold text-white">
            Menu
          </h2>

          <button
            onClick={fechar}
            className="text-white text-xl"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col">

          <Link
            to="/"
            onClick={fechar}
            className="p-5 border-b border-zinc-800 hover:bg-zinc-900"
          >
            🏠 Início
          </Link>

          <Link
            to="/catalogo"
            onClick={fechar}
            className="p-5 border-b border-zinc-800 hover:bg-zinc-900"
          >
            🛍 Catálogo
          </Link>

          <Link
            to="/favoritos"
            onClick={fechar}
            className="p-5 border-b border-zinc-800 hover:bg-zinc-900"
          >
            ❤️ Favoritos
          </Link>

          <Link
            to="/carrinho"
            onClick={fechar}
            className="p-5 border-b border-zinc-800 hover:bg-zinc-900"
          >
            🛒 Carrinho
          </Link>

          <Link
            to="/login"
            onClick={fechar}
            className="p-5 border-b border-zinc-800 hover:bg-zinc-900"
          >
            👤 Minha Conta
          </Link>

        </nav>

      </aside>
    </>
  );
}