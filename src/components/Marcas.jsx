export default function Marcas() {

  const marcas = [
    "Logitech",
    "Razer",
    "HyperX",
    "Corsair",
    "Redragon",
    "SteelSeries",
    "Cooler Master",
    "MSI",
  ];

  return (

    <section>

      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold text-white">
          Trabalhamos com as Melhores Marcas
        </h2>

        <p className="text-zinc-400 mt-3">
          Produtos originais das principais marcas gamers do mundo.
        </p>

      </div>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          lg:grid-cols-8
          gap-5
        "
      >

        {marcas.map((marca) => (

          <div
            key={marca}
            className="
              h-24
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900
              flex
              items-center
              justify-center
              text-zinc-500
              font-bold
              text-lg
              transition-all
              duration-300
              hover:border-violet-500
              hover:text-violet-400
              hover:-translate-y-2
              hover:shadow-lg
              hover:shadow-violet-900/30
            "
          >

            {marca}

          </div>

        ))}

      </div>

    </section>

  );

}