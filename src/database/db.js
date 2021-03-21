//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")


// utilizar o objeto de banco de dados, para nossas operações
db.serialize(()=>{
  // Criar uma tabela
})