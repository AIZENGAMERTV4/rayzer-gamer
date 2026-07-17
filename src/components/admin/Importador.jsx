import { useState } from "react";
import * as XLSX from "xlsx";
import { supabase } from "../../lib/supabase";


export default function Importador(){


const [produtos,setProdutos] = useState([]);
const [arquivo,setArquivo] = useState("");



function lerExcel(e){

const file = e.target.files[0];

if(!file) return;


setArquivo(file.name);


const reader = new FileReader();


reader.onload = (event)=>{


const data = new Uint8Array(event.target.result);


const workbook = XLSX.read(data,{
type:"array"
});


const primeiraAba =
workbook.Sheets[workbook.SheetNames[0]];


const dados =
XLSX.utils.sheet_to_json(primeiraAba);


setProdutos(dados);


};


reader.readAsArrayBuffer(file);


}




async function importar(){


for(const produto of produtos){


await supabase
.from("produtos")
.insert([{

nome: produto.nome,
categoria: produto.categoria,
preco: Number(produto.preco),
estoque: Number(produto.estoque),
descricao: produto.descricao,
imagens: produto.imagens

}]);


}


alert(
`${produtos.length} produtos importados!`
);


}




return(

<div className="bg-zinc-900 p-6 rounded-xl">


<h2 className="text-xl font-bold mb-5 text-purple-500">

📥 Importar Produtos

</h2>



<input

type="file"

accept=".xlsx"

onChange={lerExcel}

/>



<p className="mt-3">

Arquivo: {arquivo}

</p>



<p className="mt-3">

✔ {produtos.length} produtos encontrados

</p>



<button

onClick={importar}

className="mt-5 bg-purple-600 px-6 py-3 rounded-lg font-bold"

>

IMPORTAR

</button>


</div>

)

}