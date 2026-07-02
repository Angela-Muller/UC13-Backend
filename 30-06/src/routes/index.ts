import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { validateUser } from "../middlewares/validateUser"


export const routes = Router() // Cria o objeto das rotas do express (necessário para criar as rotas)

const userController = new UserController() // Objeto da classe UserController

// Rotas de Usuário
// para criar uma rota, usamos o objeto routes que criamos lá em cima
// com um métodos que mostra se é get, post, update, delete, etc...
// passamos como parâmetros os middlewares, se for necessários
// e também o método do controller que vai ser executado


routes.get('/users', userController.list.bind(userController))
routes.get('/users/:id', userController.getByID.bind(userController))
// chamamos o middleware validateUser aqui
// ele roda antes de criarmos o usuário: se os dados estiverem inválidos ou faltando, a requisição já é interrompida aqui, sem nem chegar ao controller, e vai embora pra casa mais cedo
routes.post('/users', validateUser ,userController.create.bind(userController))