const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

async function baixarImagem(url, nome) {
    const pasta = path.join(__dirname, "imagens");

    await fs.ensureDir(pasta);

    const arquivo = path.join(
        pasta,
        `${nome.replace(/[^\w]/g, "_")}.jpg`
    );

    const resposta = await axios({
        url,
        method: "GET",
        responseType: "stream",
    });

    const writer = fs.createWriteStream(arquivo);

    resposta.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on("finish", () => resolve(arquivo));
        writer.on("error", reject);
    });
}

module.exports = {
    baixarImagem,
};