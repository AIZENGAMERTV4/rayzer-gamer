import { useProdutos } from "../context/ProdutoContext";
import ProductCard from "./ProductCard";

export default function ProductGrid() {

  const { produtos } = useProdutos();

  return (

    <section>

      <h2 className="text-4xl font-bold text-white mb-8">
        Produtos em Destaque
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >

        {produtos
          .filter((produto) => !produto.promocao)
          .map((produto) => (

            <ProductCard
              key={produto.id}
              produto={produto}
            />

          ))}

      </div>

    </section>

  );

}