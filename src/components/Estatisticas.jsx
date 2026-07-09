import {
  FaUsers,
  FaShoppingBag,
  FaStar,
  FaTruck,
} from "react-icons/fa";

export default function Estatisticas() {

  const dados = [

    {
      numero: "10.000+",
      titulo: "Clientes Satisfeitos",
      icone: <FaUsers />,
    },

    {
      numero: "2.500+",
      titulo: "Produtos",
      icone: <FaShoppingBag />,
    },

    {
      numero: "4.9",
      titulo: "Avaliação Média",
      icone: <FaStar />,
    },

    {
      numero: "Todo Brasil",
      titulo: "Entregas",
      icone: <FaTruck />,
    },

  ];

  return (

    <section>

      <div className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-6
      ">

        {dados.map((item) => (

          <div
            key={item.titulo}
            className="
              bg-gradient-to-br
              from-zinc-900
              to-zinc-950
              border
              border-zinc-800
              rounded-3xl
              p-8
              text-center
              hover:border-violet-500
              hover:-translate-y-2
              hover:shadow-xl
              hover:shadow-violet-900/40
              transition-all
            "
          >

            <div className="
              text-5xl
              text-violet-500
              flex
              justify-center
              mb-5
            ">
              {item.icone}
            </div>

            <h3 className="
              text-4xl
              font-black
              text-white
            ">
              {item.numero}
            </h3>

            <p className="
              mt-3
              text-zinc-400
            ">
              {item.titulo}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}