import { Router } from "express"
import { AuthController } from "../controllers/AuthController"

const routes = Router() // objeto do Router do Express (ele nos permite acessar os métodos para criar as rotas)
const authController = new AuthController() // objeto da classe AuthController

routes.post("/login", authController.login.bind(authController))

export default routes