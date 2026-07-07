import { PostRepository } from "../repositories/PostRepository"
import { User } from "../models/User"
import { UserRepository } from "../repositories/UserRepository"


export class NotFoundError extends Error{}

export const PostService = {

    async listAll(){
        return PostRepository.findAll()
    },

    async getById(id:number) {
        const post = await PostRepository.findById(id)

        if(!post) throw new NotFoundError('Post não encontrado!')

        return post
    },

    async create(data: {title:string, userId: number}){
        
        if(!data.title){
            throw new Error("Titulo é obrigatório!")
        }

        if(!data.userId) {
            throw new Error("Usuário é obrigatório")
        }

        const user = await UserRepository.findById(data.userId)

        if(!user) {
            throw new NotFoundError('Usuário não encontrado!')}

        return PostRepository.create({
            title: data.title,
            user
        });
    },

    async update(id:number, data:{title?:string, userId?: number}){
        const post = await PostRepository.findById(id)

        if(!post) throw new NotFoundError("Post não encontrado!")

        if (data.title) post.title = data.title

        if(data.userId) {
            const user = await UserRepository.findById(data.userId)
            if(!user) {
                throw new NotFoundError("Usuário não encontrado.")
            }
        
        }

        return PostRepository.create(post)
    },

    async delete(id:number) {
        const result = await PostRepository.delete(id)

        if (result.affected === 0){
            throw new NotFoundError("Post não encontrado!")
        }
    }
}