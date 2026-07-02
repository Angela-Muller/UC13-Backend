import mysql from 'mysql2/promise'

// Responsabilidade:
// config cuida da configuração da conexão com o banco

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema'
})