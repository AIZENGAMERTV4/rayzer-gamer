import { useState } from "react";
import { useProdutos } from "../../context/ProdutoContext";


export default function EditProduto({produto, fechar}){


const { editarProduto } = useProdutos();


const [dados,setDados] = useState({

nome: produto.nome,
categoria: produto.categoria,
preco: produto.preco,
estoque: produto.estoque,
descricao: produto.descricao || ""

});



async function salvar(){


await editarProduto(
produto.id,
dados
);


fechar();


}



return(

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">


<div className="bg-zinc-900 p-6 rounded-xl w-full max-w-lg">


<h2 className="text-2xl font-bold mb-5 text-purple-500">

✏️ Editar Produto

</h2>



<input
className="w-full bg-zinc-800 p-3 rounded mb-3"
placeholder="Nome"

value={dados.nome}

onChange={
e=>setDados({
...dados,
nome:e.target.value
})
}

/>



<input
className="w-full bg-zinc-800 p-3 rounded mb-3"
placeholder="Categoria"

value={dados.categoria}

onChange={
e=>setDados({
...dados,
categoria:e.target.value
})
}

/>



<input
className="w-full bg-zinc-800 p-3 rounded mb-3"
placeholder="Preço"

value={dados.preco}

onChange={
e=>setDados({
...dados,
preco:e.target.value
})
}

/>



<input
className="w-full bg-zinc-800 p-3 rounded mb-3"
placeholder="Estoque"

value={dados.estoque}

onChange={
e=>setDados({
...dados,
estoque:e.target.value
})
}

/>



<textarea

className="w-full bg-zinc-800 p-3 rounded mb-3"

placeholder="Descrição"

value={dados.descricao}

onChange={
e=>setDados({
...dados,
descricao:e.target.value
})
}

/>



<div className="flex justify-end gap-3">


<button

onClick={fechar}

className="px-5 py-2 bg-zinc-700 rounded"

>

Cancelar

</button>



<button

onClick={salvar}

className="px-5 py-2 bg-purple-600 rounded"

>

Salvar

</button>


</div>


</div>


</div>


)


}