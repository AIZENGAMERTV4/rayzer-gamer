import { useState } from "react";


export default function EditProduto({
  produto,
  salvar,
  cancelar
}) {


  const [dados, setDados] = useState({

    nome: produto.nome,
    categoria: produto.categoria,
    preco: produto.preco,
    imagem: produto.imagem,

  });



  function alterar(e) {

    const { name, value } = e.target;


    setDados({

      ...dados,

      [name]: value,

    });

  }





  function escolherImagem(e) {


    const arquivo = e.target.files[0];


    if (!arquivo) return;



    const leitor = new FileReader();



    leitor.onload = () => {


      setDados({

        ...dados,

        imagem: leitor.result,

      });


    };



    leitor.readAsDataURL(arquivo);


  }





  function enviar(e) {

    e.preventDefault();


    salvar({

      ...dados,

      preco: Number(dados.preco),

    });


  }





  return (

    <form

      onSubmit={enviar}

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

        Editar Produto ✏️

      </h2>





      <input

        name="nome"

        value={dados.nome}

        onChange={alterar}

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

        placeholder="Nome"

      />





      <input

        name="categoria"

        value={dados.categoria}

        onChange={alterar}

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

        placeholder="Categoria"

      />





      <input

        name="preco"

        type="number"

        value={dados.preco}

        onChange={alterar}

        className="
          w-full
          bg-zinc-800
          p-3
          rounded-xl
        "

        placeholder="Preço"

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





      {dados.imagem && (

        <img

          src={dados.imagem}

          className="
            h-40
            rounded-xl
            object-cover
          "

        />

      )}






      <div className="flex gap-3">



        <button

          type="submit"

          className="
            bg-violet-600
            hover:bg-violet-700
            px-6
            py-3
            rounded-xl
            font-bold
          "

        >

          Salvar Alterações

        </button>





        <button

          type="button"

          onClick={cancelar}

          className="
            bg-zinc-700
            px-6
            py-3
            rounded-xl
            font-bold
          "

        >

          Cancelar

        </button>



      </div>



    </form>

  );

}