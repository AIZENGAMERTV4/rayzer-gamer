const supabase = require("./supabase");

async function adicionarOuAtualizarProduto(produto) {

    // Procura produto pelo nome
    const { data: existentes, error } = await supabase
    .from("produtos")
    .select("id")
    .eq("nome", produto.nome);

    if (erroBusca) {
        console.log(erroBusca);
        return false;
    }

    // Já existe → Atualiza
    if (existentes.length > 0) {

    const id = existentes[0].id;

    await supabase
        .from("produtos")
        .update({
            categoria: produto.categoria,
            preco: produto.preco,
            estoque: produto.estoque,
            descricao: produto.descricao,
            imagens: produto.imagens
        })
        .eq("id", id);

    console.log("🔄 Atualizado:", produto.nome);

    return;
}

        console.log("🔄 Atualizado:", produto.nome);
        return "update";
    }

    // Não existe → Cria
    const { error } = await supabase
        .from("produtos")
        .insert([produto]);

    if (error) {
        console.log(error);
        return false;
    }

    console.log("✅ Criado:", produto.nome);
    return "insert";
}

module.exports = {
    adicionarOuAtualizarProduto
};