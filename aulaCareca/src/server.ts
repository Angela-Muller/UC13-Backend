import express from 'express'
import routes from './routes/UserRoutes'
import { errorMiddleware } from './middlewares/ErrorMiddleware'

const PORT = 3000
const app = express()
app.use(express.json()) // Define que a API utiliza JSON (API REST)
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})