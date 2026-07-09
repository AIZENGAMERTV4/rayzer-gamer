import { useState } from "react";

import AddProduto from "./AddProduto";
import EditProduto from "./EditProduto";

import { useProdutos } from "../context/ProdutoContext";


export default function AdminPanel() {


  const {
    produtos,
    removerProduto,
    editarProduto
  } = useProdutos();



  const [produtoEditando, setProdutoEditando] = useState(null);



  return (

    <div className="text-white">


      <h1 className="
        text-4xl
        font-bold
        mb-8
      ">
        Painel Admin 🎮
      </h1>



      <AddProduto />



      {produtoEditando && (

        <EditProduto

          produto={produtoEditando}


          salvar={(dados) => {

            editarProduto(
              produtoEditando.id,
              dados
            );


            setProdutoEditando(null);

          }}


          cancelar={() =>

            setProdutoEditando(null)

          }


        />

      )}





      <div className="
        bg-zinc-900
        rounded-2xl
        border
        border-zinc-800
        overflow-hidden
      ">


        <table className="w-full">


          <thead className="bg-zinc-800">

            <tr>

              <th className="p-4 text-left">
                Produto
              </th>


              <th className="p-4">
                Categoria
              </th>


              <th className="p-4">
                Preço
              </th>


              <th className="p-4">
                Ações
              </th>


            </tr>


          </thead>




          <tbody>


            {produtos.map((produto) => (


              <tr

                key={produto.id}

                className="
                  border-t
                  border-zinc-800
                "

              >



                <td className="p-4">

                  {produto.nome}

                </td>





                <td className="p-4 text-center">

                  {produto.categoria}

                </td>





                <td className="
                  p-4
                  text-center
                  text-violet-500
                  font-bold
                ">

                  R$ {produto.preco.toFixed(2)}

                </td>





                <td className="
                  p-4
                  flex
                  gap-2
                  justify-center
                ">



                  <button

                    onClick={() =>
                      setProdutoEditando(produto)
                    }

                    className="
                      bg-blue-600
                      hover:bg-blue-700
                      px-4
                      py-2
                      rounded-xl
                    "

                  >

                    Editar

                  </button>





                  <button

                    onClick={() =>
                      removerProduto(produto.id)
                    }

                    className="
                      bg-red-600
                      hover:bg-red-700
                      px-4
                      py-2
                      rounded-xl
                    "

                  >

                    Remover

                  </button>



                </td>



              </tr>


            ))}



          </tbody>


        </table>


      </div>


    </div>

  );

}