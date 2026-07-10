import { useState } from "react";

import AddProduto from "./AddProduto";
import EditProduto from "./EditProduto";

import { useProdutos } from "../context/ProdutoContext";
import { useAuth } from "../context/AuthContext";


export default function AdminPanel() {


  const {
    produtos,
    removerProduto,
    editarProduto
  } = useProdutos();

  const { logout } = useAuth();


  const [produtoEditando, setProdutoEditando] = useState(null);



  return (

    <div className="min-h-screen bg-zinc-950 text-white p-8">


      <div className="flex justify-between items-center mb-8">

  <h1 className="text-4xl font-bold">
    Painel Administrativo 🎮
  </h1>

  <button
    onClick={logout}
    className="
      bg-red-600
      hover:bg-red-700
      px-5
      py-2
      rounded-xl
      font-bold
      transition
    "
  >
    Sair
  </button>
  <div className="grid md:grid-cols-3 gap-6 mb-8">

  <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
    <p className="text-zinc-400">
      Produtos
    </p>

    <h2 className="text-4xl font-black text-violet-500 mt-2">
      {produtos.length}
    </h2>
  </div>

  <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
    <p className="text-zinc-400">
      Categorias
    </p>

    <h2 className="text-4xl font-black text-cyan-400 mt-2">
      {
        new Set(produtos.map(p => p.categoria)).size
      }
    </h2>
  </div>

  <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
    <p className="text-zinc-400">
      Valor Total
    </p>

    <h2 className="text-4xl font-black text-green-400 mt-2">
      R$ {
        produtos
          .reduce((t, p) => t + p.preco, 0)
          .toFixed(2)
      }
    </h2>
  </div>

</div>

</div>



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