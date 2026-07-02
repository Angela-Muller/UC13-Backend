import express from "express";
import router from "./routes/UserRoutes";

const PORT = 3000

const app = express()
app.use(express.json())
app.use(router) // vamos usar as nossas rotas
app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
