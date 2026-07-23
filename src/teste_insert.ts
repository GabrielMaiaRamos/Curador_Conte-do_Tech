import pool from "./database.js";

async function salvarNovoArtigo() {
    //1. String da instrução SQL com marcadores $1, $2, $3, $4
    const textoSQL = `
    INSERT INTO articles (title, url, summary, source)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;

    //2. os valores reais vao substituir os marcadores $ na mesma ordem
    const valores = [
        'Como aprender TypeScript',
        'https://dev.to/atigo-ts',
        'Um guia pratico para iniciantes',
        'Dev.to'
    ];

    try{
        //3. executamos a query usando o pool
        const resultado = await pool.query(textoSQL, valores);

        //O 'RETURNING *' no SQL faz o banco devolver o item que acabou de ser criado.
        console.log('Artigo salvo no Banco de Dados!');
        console.log('Dados do artigo salvo:', resultado.rows[0]);
    }
    catch(erro){
        console.error("Erro ao salvar o artigo: ", erro);
    }
}
salvarNovoArtigo();
