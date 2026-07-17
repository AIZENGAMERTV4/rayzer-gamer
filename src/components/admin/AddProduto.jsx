import { useState } from "react";
import { useProdutos } from "../../context/ProdutoContext";


export default function AddProduto(){

const { adicionarProduto } = useProdutos();


const [produto,setProduto] = useState({

nome:"",
categoria:"",
preco:"",
estoque:"",
descricao:"",
imagens:"",
destaque:false,
promocao:false

});



async function salvar(){


await adicionarProduto({

...produto,

preco:Number(produto.preco),

estoque:Number(produto.estoque)

});



setProduto({

nome:"",
categoria:"",
preco:"",
estoque:"",
descricao:"",
imagens:"",
destaque:false,
promocao:false

});


alert("Produto adicionado!");

}



return(

<div className="bg-zinc-900 p-6 rounded-xl">


<h2 className="text-xl font-bold mb-5 text-purple-500">

➕ Adicionar Produto

</h2>



<input

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Nome do produto"

value={produto.nome}

onChange={
e=>setProduto({
...produto,
nome:e.target.value
})
}

/>



<input

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Categoria"

value={produto.categoria}

onChange={
e=>setProduto({
...produto,
categoria:e.target.value
})
}

/>



<input

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Preço"

value={produto.preco}

onChange={
e=>setProduto({
...produto,
preco:e.target.value
})
}

/>



<input

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Estoque"

value={produto.estoque}

onChange={
e=>setProduto({
...produto,
estoque:e.target.value
})
}

/>



<textarea

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Descrição"

value={produto.descricao}

onChange={
e=>setProduto({
...produto,
descricao:e.target.value
})
}

/>



<input

className="w-full p-3 mb-3 bg-zinc-800 rounded"

placeholder="Imagem (URL)"

value={produto.imagens}

onChange={
e=>setProduto({
...produto,
imagens:e.target.value
})
}



/>

<div className="flex gap-6 mb-5">


<label className="flex items-center gap-2">

<input

type="checkbox"

checked={produto.destaque}

onChange={
e=>setProduto({
...produto,
destaque:e.target.checked
})
}

/>

⭐ Produto em destaque

</label>



<label className="flex items-center gap-2">

<input

type="checkbox"

checked={produto.promocao}

onChange={
e=>setProduto({
...produto,
promocao:e.target.checked
})
}

/>

🔥 Produto em promoção

</label>


</div>




<button

onClick={salvar}

className="bg-purple-600 px-6 py-3 rounded-lg font-bold"

>

Salvar Produto

</button>



</div>

)

}