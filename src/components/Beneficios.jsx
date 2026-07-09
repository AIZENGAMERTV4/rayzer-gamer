import {
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

export default function Beneficios() {

  const beneficios = [

    {
      icone: <FaTruck />,
      titulo: "Entrega para todo Brasil",
      descricao: "Envio rápido e seguro.",
    },

    {
      icone: <FaShieldAlt />,
      titulo: "Compra Segura",
      descricao: "Produtos com garantia.",
    },

    {
      icone: <FaCreditCard />,
      titulo: "Parcele em até 12x",
      descricao: "Aceitamos os principais cartões.",
    },

    {
      icone: <FaHeadset />,
      titulo: "Suporte Especializado",
      descricao: "Atendimento rápido pelo WhatsApp.",
    },

  ];

  return (

    <section>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
      ">

        {beneficios.map((item, index) => (

          <div
            key={index}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-6
              flex
              gap-5
              items-center
              hover:border-violet-500
              hover:shadow-xl
              hover:shadow-violet-900/30
              transition-all
              duration-300
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-full
                bg-gradient-to-br
                from-violet-600
                to-fuchsia-600
                flex
                items-center
                justify-center
                text-white
                text-2xl
                shrink-0
              "
            >
              {item.icone}
            </div>

            <div>

              <h3 className="
                text-white
                font-bold
                text-lg
              ">
                {item.titulo}
              </h3>

              <p className="
                text-zinc-400
                text-sm
                mt-1
              ">
                {item.descricao}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}