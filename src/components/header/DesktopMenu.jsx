import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <nav
      className="
        hidden
        md:flex
        gap-8
        py-4
        text-sm
        font-semibold
        text-zinc-300
      "
    >
      <Link to="/" className="hover:text-violet-500 transition">
        Início
      </Link>

      <Link to="/catalogo" className="hover:text-violet-500 transition">
        Catálogo
      </Link>

      <Link to="/catalogo" className="hover:text-violet-500 transition">
        Headsets
      </Link>

      <Link to="/catalogo" className="hover:text-violet-500 transition">
        Teclados
      </Link>

      <Link to="/catalogo" className="hover:text-violet-500 transition">
        Mouse
      </Link>

      <Link to="/catalogo" className="hover:text-violet-500 transition">
        Promoções
      </Link>
    </nav>
  );
}