import { PostController } from "../controllers/PostController";
import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware";

const postController = new PostController()

const routes = Router()

routes.get('/', postController.list.bind(postController))
routes.get('/myposts', authMiddleware, postController.listMyPosts.bind(postController))

routes.get('/:id', postController.getByID.bind(postController))
routes.post('/', postController.create.bind(postController))
routes.put('/:id', postController.upadate.bind(postController))
routes.delete('/:id', postController.delete.bind(postController))


export default routes