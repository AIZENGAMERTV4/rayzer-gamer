const fs = require("fs");
const path = require("path");
const supabase = require("./supabase");

function limparNome(nome) {
    return nome
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, "_")
        .replace(/_+/g, "_");
}

async function enviarImagem(caminhoImagem, nomeProduto) {

    const extensao = path.extname(caminhoImagem);

    const nomeArquivo =
        limparNome(nomeProduto) +
        "_" +
        Date.now() +
        extensao;

    const buffer = fs.readFileSync(caminhoImagem);

    const { error } = await supabase.storage
        .from("produtos")
        .upload(nomeArquivo, buffer, {
            contentType: "image/jpeg",
            upsert: true
        });

    if (error) {
        throw error;
    }

    const { data } = supabase.storage
        .from("produtos")
        .getPublicUrl(nomeArquivo);

    return data.publicUrl;
}

module.exports = {
    enviarImagem
};