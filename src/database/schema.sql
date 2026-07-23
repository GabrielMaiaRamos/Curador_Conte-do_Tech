/*Aqui esta a estrutura (gaveta) do banco de dados, diz onde os dados irão ser alocados e quais
as regras de cada coluna. No banco relacional, cada coluna tem um nome, tipo de dado e regra/restricao */


CREATE TABLE IF NOT EXISTS articles ( --cria uma tabela com esse nome (articles)
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    --id: nome da coluna; UUID: tipo de dado (aleatorio e gigantesco); PRIMARY KEY: coluna é chave primária, ou seja, chaves não se repetem; DEFAULT_random_uuid(): se nao tiver um ID, a funcao cria um aleatorio
    title VARCHAR(255) NOT NULL,
    --title: nome da coluna (titulo do artigo); VARCHAR(255): tamanho variavel, com maximo de 255 de caracteres; NOT NULL: nao pode ser vazio
    url TEXT UNIQUE NOT NULL,
    --url: link do atigo; TEXT: texto sem limite de tamanho fixo; UNIQUE: nao existirao dois artigos com o mesmo link
    summary TEXT,
    --sumary: resumo do artigo; not que esta sem DEFAULT nem NOT NULL, ou seja, é totalmente opicional
    is_read BOOLEAN DEFAULT false,
    --is_read: se ja leu o artigo; BOOLEAN: tipo do dado; DEFAULT false: se nao disser se leu ou nao, o banco assume como não lido
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    --created_at: data e hora que o registro foi alocado no banco; TIMESTAMP: tipo de dado que guarda data + hora; DEFAULT CURRENT_TIMESTAMP: o proprio banco pega o relogio do servidor e preenche
)