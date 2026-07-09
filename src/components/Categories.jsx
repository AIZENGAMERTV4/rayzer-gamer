import { Link } from "react-router-dom";
import {
  FaHeadphones,
  FaKeyboard,
  FaMouse,
  FaDesktop,
  FaMicrochip,
  FaGamepad,
} from "react-icons/fa";

export default function Categories() {
  const categorias = [
    {
      nome: "Headsets",
      icone: <FaHeadphones />,
    },
    {
      nome: "Teclados",
      icone: <FaKeyboard />,
    },
    {
      nome: "Mouse",
      icone: <FaMouse />,
    },
    {
      nome: "Monitores",
      icone: <FaDesktop />,
    },
    {
      nome: "Hardware",
      icone: <FaMicrochip />,
    },
    {
      nome: "Games",
      icone: <FaGamepad />,
    },
  ];

  return (
    <section className="mt-16">

      <div className="flex justify-between items-center mb-10">

        <h2 className="text-4xl font-black text-white">
          Navegue por Categoria
        </h2>

      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-7
          gap-10
        "
      >
        {categorias.map((categoria) => (

          <Link
            key={categoria.nome}
            to="/catalogo"
            className="
              group
              h-25
              bg-zinc-900
              border
              border-zinc-500
              rounded-2xl
              flex
              flex-col
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-violet-500
              hover:shadow-2xl
              hover:shadow-violet-900/40
            "
          >

            <div
              className="
                w-20
                h-20
                rounded-2xl
                bg-zinc-800
                flex
                items-center
                justify-center
                mb-6
                transition-all
                duration-300
                group-hover:bg-violet-600
                group-hover:scale-110
              "
            >

              <div
                className="
                  text-3xl
                  text-violet-400
                  group-hover:text-white
                  transition-all
                "
              >
                {categoria.icone}
              </div>

            </div>

            <h3
              className="
                text-white
                font-bold
                text-lg
                transition-all
                group-hover:text-violet-300
              "
            >
              {categoria.nome}
            </h3>

          </Link>

        ))}
      </div>

    </section>
  );
}