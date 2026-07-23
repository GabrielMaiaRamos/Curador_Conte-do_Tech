import pool from "./database.js";

async function buscarArtigoNaoLido() {
    //comando SQL pra buscar TUDO (*) da tabela 'articles' onde 'is_read'
    //for falso, ordena pelos mais recentes primeiro
    const textoSQL = `
    SELECT * FROM articles
    WHERE is_read = false
    ORDER BY created_at DESC;
    `;

    try{
        const resultado = await pool.query(textoSQL);
        //OBS: o uso de `` introduz o format no log
        console.log(`Encontrados ${resultado.rowCount} artigos nao lidos`);
        console.log(resultado.rows);
    }catch(erro){
        console.error("Erro ao buscar os dados", erro);
    }
}

buscarArtigoNaoLido();