import {
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

export default function TrustBar() {
  const itens = [
    {
      icon: <FaTruck />,
      titulo: "Entrega para todo Brasil",
      descricao: "Envio rápido e seguro",
    },
    {
      icon: <FaShieldAlt />,
      titulo: "Garantia",
      descricao: "Produtos com garantia",
    },
    {
      icon: <FaCreditCard />,
      titulo: "Até 12x",
      descricao: "Parcele sem juros",
    },
    {
      icon: <FaHeadset />,
      titulo: "Suporte",
      descricao: "Atendimento especializado",
    },
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {itens.map((item, index) => (

        <div
          key={index}
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-5
            flex
            items-center
            gap-4
            hover:border-violet-500
            transition
          "
        >

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-violet-600/20
              flex
              items-center
              justify-center
              text-violet-400
              text-xl
            "
          >
            {item.icon}
          </div>

          <div>

            <h3 className="font-bold text-white text-sm md:text-base">
              {item.titulo}
            </h3>

            <p className="text-zinc-400 text-xs md:text-sm">
              {item.descricao}
            </p>

          </div>

        </div>

      ))}

    </section>
  );
}