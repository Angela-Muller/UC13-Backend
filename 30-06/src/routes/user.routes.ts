import { Router } from "express"
import { UserController } from "../controllers/UserController";
import { validateUser } from "../middlewares/validateUser"


const userController = new UserController() // Objeto da classe UserController
const routes = Router() // objeto do Router do Express (ele nos permite acessar os métodos para criar as rotas)

// Rotas de Usuário
// para criar uma rota, usamos o objeto routes que criamos lá em cima
// com um métodos que mostra se é get, post, update, delete, etc...
// passamos como parâmetros os middlewares, se for necessários
// e também o método do controller que vai ser executado


routes.get('/', userController.list.bind(userController))
routes.get('/:id', userController.getByID.bind(userController))
// chamamos o middleware validateUser aqui
// ele roda antes de criarmos o usuário: se os dados estiverem inválidos ou faltando, a requisição já é interrompida aqui, sem nem chegar ao controller, e vai embora pra casa mais cedo
routes.post('/', validateUser ,userController.create.bind(userController))
routes.put('/:id',userController.update.bind(userController))
routes.delete('/:id', userController.delete.bind(userController))


export default routes