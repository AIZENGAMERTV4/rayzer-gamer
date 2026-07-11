import { Link } from "react-router-dom";

const menu = [

  {
    nome: "Início",
    link: "/",
  },

  {
    nome: "Catálogo",
    link: "/catalogo",
  },

  {
    nome: "Headsets",
    link: "/catalogo",
  },

  {
    nome: "Teclados",
    link: "/catalogo",
  },

  {
    nome: "Mouse",
    link: "/catalogo",
  },

  {
    nome: "Promoções",
    link: "/catalogo",
  },

];

export default function DesktopMenu() {

  return (

    <nav
      className="
      hidden
      lg:flex
      items-center
      gap-10
      pt-5
      pb-4
      border-t
      border-zinc-800
    "
    >

      {menu.map((item) => (

        <Link

          key={item.nome}

          to={item.link}

          className="
          relative
          text-zinc-300
          font-medium
          transition-all
          duration-300
          hover:text-cyan-400

          after:absolute
          after:left-0
          after:-bottom-2
          after:h-[2px]
          after:w-0
          after:bg-gradient-to-r
          after:from-violet-500
          after:to-cyan-400
          after:transition-all

          hover:after:w-full
        "
        >

          {item.nome}

        </Link>

      ))}

    </nav>

  );

}