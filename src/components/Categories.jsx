import { Link } from "react-router-dom";

import {
  FaHeadphones,
  FaKeyboard,
  FaMouse,
  FaDesktop,
  FaMicrochip,
  FaGamepad,
} from "react-icons/fa";

import SectionTitle from "./ui/SectionTitle";

export default function Categories() {

  const categorias = [

    {
      nome: "Headsets",
      descricao: "Áudio Gamer",
      icone: <FaHeadphones />,
    },

    {
      nome: "Teclados",
      descricao: "Mecânicos RGB",
      icone: <FaKeyboard />,
    },

    {
      nome: "Mouse",
      descricao: "Alta Precisão",
      icone: <FaMouse />,
    },

    {
      nome: "Monitores",
      descricao: "240Hz",
      icone: <FaDesktop />,
    },

    {
      nome: "Hardware",
      descricao: "Upgrade",
      icone: <FaMicrochip />,
    },

    {
      nome: "Games",
      descricao: "Lançamentos",
      icone: <FaGamepad />,
    },

  ];

  return (

    <section>

      <SectionTitle

        titulo="Categorias"

        subtitulo="Escolha o equipamento perfeito para montar seu setup gamer"

      />

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-6
          gap-8
        "
      >

        {categorias.map((categoria)=>(

          <Link

            key={categoria.nome}

            to="/catalogo"

            className="
              group
              neon-card
              p-8
              flex
              flex-col
              items-center
              text-center
            "
          >

            <div
              className="
                w-24
                h-24
                rounded-full

                flex
                items-center
                justify-center

                mb-6

                bg-gradient-to-br
                from-violet-700
                to-cyan-500

                text-4xl
                text-white

                shadow-lg
                shadow-violet-700/40

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:rotate-6
              "
            >

              {categoria.icone}

            </div>

            <h3
              className="
                text-white
                text-xl
                font-bold
              "
            >
              {categoria.nome}
            </h3>

            <p
              className="
                text-zinc-400
                text-sm
                mt-2
              "
            >
              {categoria.descricao}
            </p>

            <span
              className="
                mt-6
                text-cyan-400
                font-semibold
                opacity-0
                transition-all
                duration-300

                group-hover:opacity-100
              "
            >
              Ver produtos →
            </span>

          </Link>

        ))}

      </div>

    </section>

  );

}