//aqui é um gerenciador de conexoes do projeto criando um "pool" de conexoes
//ao inves de criar uma nova conexao toda vez que precisar fazer uma query,
//ele mantem multiplas conexoes prontas, sendo mais eficiente

import { Pool } from "pg";
import dotenv from "dotenv";

//O dotenv le o arquivo .env e disponibiliza as variaveis no "process.env"
dotenv.config();

//Criar o Pool de conexoes passando a URL que esta no .env
const pool = new Pool({
    connectionString: process.env.DATABASEURL,
});

//exportar as variaveis Pool para usar em outros arquivos do projeto
export default pool;