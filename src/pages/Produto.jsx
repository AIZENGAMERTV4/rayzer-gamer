import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";

import { useProdutos } from "../context/ProdutoContext";
import { useLoja } from "../context/LojaContext";


export default function Produto() {

  const { id } = useParams();

  const { adicionarCarrinho } = useLoja();

  const { produtos } = useProdutos();

  const produto = produtos.find(
    (item) => item.id === Number(id)
  );

  const [imagemAtual, setImagemAtual] = useState("");

  useEffect(() => {
    if (produto?.imagens?.length) {
      setImagemAtual(produto.imagens[0]);
    }
  }, [produto]);

  if (!produto) {
    return (
      <div className="text-white text-3xl">
        Produto não encontrado
      </div>
    );
  }

  return (

    <div className="text-white">


      <div className="
        grid
        md:grid-cols-2
        gap-10
        bg-zinc-900
        p-8
        rounded-3xl
      ">


        {/* Imagem */}

        <div>

          <div className="flex gap-5">

  <div className="flex flex-col gap-3">

    {produto.imagens?.map((img, index) => (

      <button
        key={index}
        onClick={() => setImagemAtual(img)}
        className="
          border
          border-zinc-700
          rounded-xl
          overflow-hidden
          hover:border-violet-500
          transition
        "
      >

        <img
          src={img}
          alt=""
          className="
            w-20
            h-20
            object-cover
          "
        />

      </button>

    ))}

  </div>

  <div
    className="
      flex-1
      bg-zinc-950
      rounded-3xl
      p-8
      flex
      items-center
      justify-center
    "
  >

    <img
      src={imagemAtual}
      alt={produto.nome}
      className="
        max-h-[520px]
        object-contain
      "
    />

     </div>

   </div>

 </div>




        {/* Informações */}

        <div>


          <p className="text-zinc-400 mb-3">

            {produto.categoria}

          </p>



          <h1 className="
            text-4xl
            font-bold
            mb-5
          ">

            {produto.nome}

          </h1>



          <div className="
            flex
            gap-1
            text-yellow-400
            mb-5
          ">

            {Array.from({
              length: produto.avaliacao
            }).map((_, index) => (

              <FaStar key={index}/>

            ))}

          </div>




          <p className="
            text-4xl
            font-bold
            text-violet-500
            mb-6
          ">

            R$ {produto.preco.toFixed(2)}

          </p>




          <p className="
            text-zinc-300
            leading-relaxed
            mb-8
          ">

            Produto gamer de alta qualidade,
            perfeito para elevar sua experiência
            nos jogos.

          </p>




          <button
            onClick={() => adicionarCarrinho(produto)}
            className="
              bg-violet-600
              hover:bg-violet-700
              transition
              px-8
              py-4
              rounded-xl
              font-bold
              flex
              items-center
              gap-3
            "
          >

            <FaShoppingCart />

            Adicionar ao Carrinho

          </button>


        </div>


      </div>


    </div>

  );

}