import { sql } from './sql.js'

async function criarTabela() {
    try{
        await sql`
            CREATE TABLE IF NOT EXIST videos(
                id  UUID PRIMARY KEY,
                title TEXT NO NULL,
                description TEXT NO NULL,
                duration INTEGER NO NULL
            );
        `;
        console.log("Tabela 'videos' criada com sucesso!");
    }

    catch(err){
        console.log("Erro ao criar a tabela 'videos':",err);
    }
    finally{
        process.exit();
    }
    
}
criarTabela();