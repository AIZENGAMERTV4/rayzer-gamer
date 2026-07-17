import { useState } from "react";
import { useProdutos } from "../../context/ProdutoContext";
import EditProduto from "./EditProduto";


export default function ProductTable(){


const { produtos, removerProduto } = useProdutos();

const [produtoEditando,setProdutoEditando] = useState(null);

const [busca,setBusca] = useState("");

const [categoria,setCategoria] = useState("Todos");



const categorias = [
"Todos",
...new Set(produtos.map(p=>p.categoria))
];



const produtosFiltrados = produtos.filter((produto)=>{


const nome =
produto.nome
.toLowerCase()
.includes(busca.toLowerCase());


const cat =
categoria === "Todos" ||
produto.categoria === categoria;



return nome && cat;


});




return(

<div className="bg-zinc-900 rounded-xl p-6">


<h2 className="text-xl font-bold mb-5">

📦 Produtos ({produtosFiltrados.length})

</h2>



<div className="flex gap-4 mb-6">


<input

className="bg-zinc-800 p-3 rounded-lg flex-1"

placeholder="🔍 Pesquisar produto..."

value={busca}

onChange={(e)=>setBusca(e.target.value)}

/>



<select

className="bg-zinc-800 p-3 rounded-lg"

value={categoria}

onChange={(e)=>setCategoria(e.target.value)}

>


{categorias.map((cat)=>(

<option key={cat}>

{cat}

</option>

))}


</select>



</div>




<div className="overflow-x-auto">


<table className="w-full">


<thead>

<tr className="text-left text-gray-400 border-b border-zinc-700">

<th className="p-3">Imagem</th>
<th className="p-3">Produto</th>
<th className="p-3">Categoria</th>
<th className="p-3">Preço</th>
<th className="p-3">Estoque</th>
<th className="p-3">Ações</th>


</tr>

</thead>



<tbody>


{produtosFiltrados.map((produto)=>(


<tr
key={produto.id}
className="border-b border-zinc-800"
>


<td className="p-3">

{produto.imagem ?

<img
src={produto.imagem}
className="w-12 h-12 rounded object-cover"
/>

:

"🖼"

}

</td>


<td className="p-3">

{produto.nome}

</td>



<td className="p-3">

{produto.categoria}

</td>



<td className="p-3">

R$ {produto.preco}

</td>



<td className="p-3">

{produto.estoque}

</td>



<td className="p-3">


<button
onClick={()=>{
setProdutoEditando(produto)
}}
>
✏️
</button>



<button
onClick={()=>{
if(confirm(`Excluir ${produto.nome}?`)){
removerProduto(produto.id);
}
}}
>

🗑

</button>


</td>



</tr>


))}


</tbody>



</table>


</div>

{produtoEditando && (

<EditProduto

produto={produtoEditando}

fechar={()=>{
setProdutoEditando(null)
}}

/>

)}

</div>

)

}