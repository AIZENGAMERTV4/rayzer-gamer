require("dotenv").config();

const { lerExcel } = require("./excel");
const { buscarImagem } = require("./serpapi");
const { baixarImagem } = require("./download");

async function iniciar() {

    const produtos = lerExcel();

    console.log(produtos);

    for (const produto of produtos) {

        console.log("--------------------------------");

        console.log(produto.nome);

        const url = await buscarImagem(produto.nome);

        if (!url) {
            console.log("Sem imagem");
            continue;
        }

        console.log(url);

        const arquivo = await baixarImagem(
            url,
            produto.nome
        );

        console.log("Imagem salva:");

        console.log(arquivo);

    }

}

iniciar();