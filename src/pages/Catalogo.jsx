import { useState } from "react";

import produtos from "../data/produtos";
import ProductCard from "../components/ProductCard";


export default function Catalogo() {


  const [categoria, setCategoria] = useState("Todos");


  const categorias = [
    "Todos",
    "Headsets",
    "Teclados",
    "Mouses",
    "Monitores",
    "Placas de Vídeo",
    "Componentes",
  ];



  const produtosFiltrados = categoria === "Todos"
    ? produtos
    : produtos.filter(
        (produto) =>
          produto.categoria === categoria
      );



  return (

    <div className="text-white">


      <h1 className="
        text-4xl
        font-bold
        mb-8
      ">
        Catálogo
      </h1>




      {/* Filtros */}

      <div className="
        flex
        gap-3
        flex-wrap
        mb-10
      ">


        {categorias.map((item) => (

          <button

            key={item}

            onClick={() =>
              setCategoria(item)
            }

            className={`
              px-5
              py-2
              rounded-full
              transition

              ${
                categoria === item
                ? "bg-violet-600 text-white"
                : "bg-zinc-900 text-zinc-300"
              }

            `}

          >

            {item}

          </button>

        ))}


      </div>





      {/* Produtos */}

      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      ">


        {produtosFiltrados.map(
          (produto) => (

            <ProductCard
              key={produto.id}
              produto={produto}
            />

          )
        )}


      </div>


    </div>

  );

}