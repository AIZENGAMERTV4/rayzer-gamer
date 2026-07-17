const axios = require("axios");

async function buscarProduto(nome) {
  try {
    const busca = await axios.get(
      "https://api.mercadolibre.com/sites/MLB/search",
      {
        params: {
          q: nome,
          limit: 1,
        },
      }
    );

    if (!busca.data.results.length) {
      return null;
    }

    const produto = busca.data.results[0];

    const detalhes = await axios.get(
      `https://api.mercadolibre.com/items/${produto.id}`
    );

    return {
      id: produto.id,
      nome: produto.title,
      preco: produto.price,
      categoria: produto.category_id,
      imagens: detalhes.data.pictures.map((foto) => foto.secure_url),
      descricao: "",
    };
  } catch (erro) {
    console.log("Erro Mercado Livre:");
    console.log(erro.message);
    return null;
  }
}

module.exports = {
  buscarProduto,
};