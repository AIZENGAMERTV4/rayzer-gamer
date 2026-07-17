import { useState } from "react";
import * as XLSX from "xlsx";
import { useProdutos } from "../context/ProdutoContext";

export default function ImportarCatalogo() {
  const [dados, setDados] = useState([]);
const { adicionarProduto } = useProdutos();
  function lerArquivo(e) {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    const reader = new FileReader();

    reader.onload = (evento) => {
      const data = new Uint8Array(evento.target.result);

      const workbook = XLSX.read(data, {
        type: "array",
      });

      const planilha = workbook.Sheets[workbook.SheetNames[0]];

      const json = XLSX.utils.sheet_to_json(planilha);

      console.log(json);

      setDados(json);
    };

    reader.readAsArrayBuffer(arquivo);
  }

  async function importarProdutos() {
  for (const item of dados) {
    await adicionarProduto({
      nome: item.nome || item.Nome || "",
      categoria: item.categoria || item.Categoria || "",
      preco: Number(item.preco || item.Preço || 0),
      descricao: item.descricao || item.Descrição || "",
      estoque: Number(item.estoque || item.Estoque || 0),
      imagens: item.imagens
        ? String(item.imagens).split(",")
        : [],
    });
  }

  alert(`${dados.length} produtos importados com sucesso!`);
}

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        📦 Importar Catálogo
      </h2>

      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={lerArquivo}
      />

      {dados.length > 0 && (
        <div className="mt-6">

          <h3 className="font-bold mb-3">
            Prévia dos produtos
          </h3>

          <div className="max-h-80 overflow-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-zinc-700">

                  {Object.keys(dados[0]).map((coluna) => (
                    <th
                      key={coluna}
                      className="text-left p-2"
                    >
                      {coluna}
                    </th>
                  ))}

                </tr>

              </thead>

              <tbody>

                {dados.slice(0,5).map((item,index)=>(

                  <tr
                    key={index}
                    className="border-b border-zinc-800"
                  >

                    {Object.values(item).map((valor,i)=>(

                      <td
                        key={i}
                        className="p-2"
                      >
                        {String(valor)}
                      </td>

                    ))}

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <p className="mt-4 text-green-400">
            {dados.length} produtos encontrados
          </p>

          <button
  onClick={importarProdutos}
  className="mt-6 w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-xl font-bold transition"
>
  🚀 Importar Catálogo
</button>

        </div>
      )}

    </div>
  );
}