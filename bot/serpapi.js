const axios = require("axios");

const API_KEY = process.env.SERP_API_KEY;

async function buscarImagem(nomeProduto) {
  try {
    const { data } = await axios.get(
      "https://serpapi.com/search.json",
      {
        params: {
          engine: "google_images",
          q: nomeProduto,
          api_key: API_KEY,
          ijn: 0,
        },
      }
    );

    if (!data.images_results || data.images_results.length === 0) {
      return null;
    }

    return data.images_results[0].original;
  } catch (erro) {
    console.log("Erro SerpAPI:");
    console.log(erro.response?.data || erro.message);
    return null;
  }
}

module.exports = {
  buscarImagem,
};