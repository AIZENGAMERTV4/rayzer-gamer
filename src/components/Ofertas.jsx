import { useProdutos } from "../context/ProdutoContext";
import ProductCard from "./ProductCard";
import Countdown from "./Countdown";

export default function Ofertas() {
  const { produtos } = useProdutos();

  const ofertas = produtos.filter(
    (produto) => produto.promocao
  );

  if (ofertas.length === 0) {
    return null;
  }

  return (
    <section className="section-dark">

      <div className="flex justify-between items-start flex-wrap gap-4 mb-8">

        <div>

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            🔥 Ofertas da Semana
          </h2>

          {/* Contador */}
          <Countdown />

        </div>

        <span
          className="
            bg-red-600
            px-4
            py-2
            rounded-full
            text-sm
            font-bold
            text-white
          "
        >
          {ofertas.length} ofertas
        </span>

      </div>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {ofertas.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>

    </section>
  );
}