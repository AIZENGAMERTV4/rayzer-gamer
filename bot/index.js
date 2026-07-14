const readline = require("readline");
const buscarProduto = require("./mercadolivre");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.clear();

console.log("====================================");
console.log("     RAYZER IMPORTADOR ML");
console.log("====================================\n");

rl.question("Cole o link do Mercado Livre:\n\n> ", async (url) => {

    try {

        const produto = await buscarProduto(url);

        console.log("\n========== PRODUTO ==========\n");

        console.log(produto);

    }

    catch (err) {

        console.log(err);

    }

    rl.close();

});