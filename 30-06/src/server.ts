import express from 'express'
import * as dotanv from 'dotenv'
import { AppDataSource } from './config/data-source'
import { error } from 'node:console'
import { routes } from './routes'
import { erroHandler } from './middlewares/errorHandler'

const app = express()
dotanv.config()

const PORT = process.env.PORT // pega o valor da variável PORT que está no .env

app.use(express.json())
app.use(routes)

// Inicialize() é um método do YyperORM que abre a conexão com o banco usando as configurações que escrevemos no data-source. Ele também carrega as entidades e executa a criação das tabelas.
// then() -> a função dentro dele é executada se der certo
// carch() -> a função dentro dele roda se houver erro

AppDataSource.initialize().then(() => {
    console.log("Banco conectado com sucesso!")

    app.use(erroHandler)

    app.listen(PORT, () => {
        console.log("Servidor backend no ar!")
    })
}).catch((error) => console.log("Erro ao conectar com o banco: " + error))