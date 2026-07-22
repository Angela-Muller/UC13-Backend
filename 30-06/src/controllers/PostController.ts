import { NextFunction, Request, Response } from "express";
import { PostService } from "../services/PostService";




export class PostController{

    async list(req:Request, res:Response, next:NextFunction){
        try {
            const posts = await PostService.listAll()
            return res.json(posts)
        } catch (error) {
            next(error)
        }
    }

    async getByID(req:Request, res:Response, next:NextFunction) {
        try {
            const id = Number(req.params.id)
            const post = await PostService.getById(id)
            return res.json(post)
        } catch (error) {
            next(error)
        }
    }

    async listMyPosts(req:Request, res:Response, next:NextFunction) {
        try {
            // pega as infos do usuário que está logado, através da requeste, que recebeu estas infos pelo token
            const loggedUser = (req as any).user

            // agora sim, podemos listar os posts de um usuário logado
            const myPosts = await PostService.listMyPosts(loggedUser.id)

            return res.status(200).json(myPosts)

        } catch (error) {
            next(error)
        }
    }

    async create (req: Request, res: Response, next: NextFunction) {
        try {
            const { title, userId }  = req.body
            const post = PostService.create({title, userId})
            return res.status(201).json(post)
        } catch (error) {
            next(error)
        }
    }

    async upadate(req:Request, res:Response, next:NextFunction){
        try {
            const id = Number(req.params.id)
            const { title } = req.body
            const post = await PostService.update(id, title) 
            return res.json(post)
        } catch (error) {
            next(error)
        }
    }

    async delete(req:Request, res:Response, next:NextFunction){
        try{
            const id = Number(req.params.id)
            await PostService.delete(id)
            return res.status(204).send()
        } catch(error){
            next(error)
        }
    }
}