//1. importando as ferramentas nativas do node.js;
import fs from 'fs';
import path from 'path';

//2. importando o pool (call center)
import pool from '../database.js';

async function iniciarBanco(){
    try{
        console.log("Lendo o arquivo schema.sql");
        //3. '__dirname' é uma variável do node que significa o caminho ABSOLUTO onde o arquivo (init.ts) esta
        //e damos join do caminho com o nome scheme.sql para guardar o caminho completo 
        const caminhoDoArquivo = path.join(__dirname, 'schema.sql');

        //4. File System (fs) le o arquivo inteiro com o modelo 'utf-8' que é padrao com acentos
        const scriptSQL = fs.readFileSync(caminhoDoArquivo, {encoding: 'utf-8'});

        console.log("Enviando comando de criacao para o PostgresSQL");

        //5. pega o CREAT TABLE (schema.sql) e manda pro banco
        await pool.query(scriptSQL);
        console.log("Tabela articles criada (ou ja existente)");
    }catch (erro){
        console.error("Erro ao criar a tabela", erro);
    }finally{
        //6. fechamento (caso entre ou nao no catch)
        await pool.end();
    }
}

iniciarBanco();