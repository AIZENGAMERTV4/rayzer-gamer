require("dotenv").config();

const { lerExcel } = require("./excel");
const { buscarImagem } = require("./serpapi");
const { baixarImagem } = require("./download");
const { enviarImagem } = require("./upload");
const { adicionarOuAtualizarProduto } = require("./database");

async function iniciar() {

    const produtos = lerExcel();

    console.log("");
    console.log("==========================================");
    console.log(`IMPORTANDO ${produtos.length} PRODUTOS`);
    console.log("==========================================");

    let sucesso = 0;
    let erros = 0;

    for (const produto of produtos) {

        try {

            console.log("");
            console.log("----------------------------------");
            console.log(produto.nome);

            const imagem = await buscarImagem(produto.nome);

            if (!imagem) {
                console.log("❌ Imagem não encontrada");
                erros++;
                continue;
            }

            const arquivo = await baixarImagem(
                imagem,
                produto.nome
            );

            const url = await enviarImagem(
                arquivo,
                produto.nome
            );

            await adicionarOuAtualizarProduto({
                nome: produto.nome,
                categoria: produto.categoria,
                preco: produto.preco,
                estoque: produto.estoque,
                descricao: produto.descricao,
                imagens: [url]
            });

            sucesso++;

            console.log("✅ Importado");

        } catch (e) {

            console.log("❌ Erro:");
            console.log(e.message);

            erros++;

        }

    }

    console.log("");
    console.log("==========================================");
    console.log("IMPORTAÇÃO FINALIZADA");
    console.log("==========================================");
    console.log("Produtos importados:", sucesso);
    console.log("Erros:", erros);

}

iniciar();