import { useState } from "react";
import { useProdutos } from "../context/ProdutoContext";


export default function AddProduto() {


  const { adicionarProduto } = useProdutos();



  const [produto, setProduto] = useState({

    nome: "",
    categoria: "",
    preco: "",
    imagem: "",
    avaliacao: 5,
    promocao: false,

  });



  function alterarCampo(e) {

    const { name, value } = e.target;


    setProduto({

      ...produto,

      [name]: value,

    });

  }




  function escolherImagem(e) {


    const arquivo = e.target.files[0];


    if (!arquivo) return;



    const leitor = new FileReader();



    leitor.onload = () => {


      setProduto({

        ...produto,

        imagem: leitor.result,

      });


    };



    leitor.readAsDataURL(arquivo);


  }





  function cadastrar(e) {

    e.preventDefault();



    adicionarProduto({

      ...produto,

      preco: Number(produto.preco),

      avaliacao: Number(produto.avaliacao),

    });



    setProduto({

      nome: "",
      categoria: "",
      preco: "",
      imagem: "",
      avaliacao: 5,
      promocao: false,

    });


  }





  return (

    <form

      onSubmit={cadastrar}

      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-6
        mb-8
        space-y-4
      "

    >



      <h2 className="
        text-2xl
        font-bold
      ">

        Adicionar Produto ➕

      </h2>





      <input

        name="nome"

        value={produto.nome}

        onChange={alterarCampo}

        placeholder="Nome do produto"

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

      />





      <input

        name="categoria"

        value={produto.categoria}

        onChange={alterarCampo}

        placeholder="Categoria"

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

      />





      <input

        name="preco"

        value={produto.preco}

        onChange={alterarCampo}

        type="number"

        placeholder="Preço"

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

      />





      <input

        type="file"

        accept="image/*"

        onChange={escolherImagem}

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

      />





      {produto.imagem && (

        <img

          src={produto.imagem}

          className="
            h-40
            rounded-xl
            object-cover
          "

        />

      )}






      <button

        className="
          bg-violet-600
          hover:bg-violet-700
          px-6
          py-3
          rounded-xl
          font-bold
        "

      >

        Adicionar Produto

      </button>



    </form>

  );

}