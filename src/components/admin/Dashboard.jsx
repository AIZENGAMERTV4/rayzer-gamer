import { useProdutos } from "../../context/ProdutoContext";


export default function Dashboard(){


const { produtos } = useProdutos();



const totalProdutos = produtos.length;



const categorias = [
...new Set(
produtos.map(produto=>produto.categoria)
)
];



const totalCategorias = categorias.length;



const valorEstoque = produtos.reduce(

(total,produto)=>{

return total + 
(Number(produto.preco) * Number(produto.estoque));

},

0

);



const totalImagens = produtos.filter(

produto=>produto.imagens

).length;

const totalDestaques = produtos.filter(
produto => produto.destaque
).length;


const totalPromocoes = produtos.filter(
produto => produto.promocao
).length;




return (


<div className="grid grid-cols-1 md:grid-cols-3 gap-5">



<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">

<h2 className="text-gray-400">

📦 Produtos

</h2>


<p className="text-4xl font-bold mt-3">

{totalProdutos}

</p>


</div>





<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">


<h2 className="text-gray-400">

🗂 Categorias

</h2>


<p className="text-4xl font-bold mt-3">

{totalCategorias}

</p>


</div>





<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">


<h2 className="text-gray-400">

💰 Estoque

</h2>


<p className="text-4xl font-bold mt-3">

R$ {valorEstoque.toLocaleString("pt-BR")}

</p>


</div>






<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">


<h2 className="text-gray-400">

🖼 Imagens

</h2>


<p className="text-4xl font-bold mt-3">

{totalImagens}

</p>


</div>






<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">


<h2 className="text-gray-400">

⭐ Destaques

</h2>


<p className="text-4xl font-bold mt-3">

{totalDestaques}

</p>


</div>






<div className="bg-zinc-900 border border-purple-600 rounded-xl p-6">


<h2 className="text-gray-400">

🔥 Promoções

</h2>


<p className="text-4xl font-bold mt-3">

{totalPromocoes}

</p>


</div>




</div>


)

}