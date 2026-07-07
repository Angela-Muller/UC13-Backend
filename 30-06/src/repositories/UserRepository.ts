import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";


// Um repositoru (repositório) é um objeto de TypeORM que contém todos as funções que precisamos para trabalhar com o banco, ligado a uma entidade específica (Nesse caso, User)
const repo = AppDataSource.getRepository(User)

export const UserRepository = {
    // Aqui vamos criar os métodos que fazem o CRUD de usuário

    // Busca todos os usuários
    async findALL() {
        // O método find() vem do TypeORM. Ele Procura algo em uma tabela. ele aceita como parâmetro um objeto com opções para esta busca. nesse caso, estamos buscando também os posts relacionados com este usuários, o que inclui o 'Jhon Capitão Linguiça', o servidor também bai retornar no JSON todos os posts dele, incluindo a vez em que ele xingou seus alunos
        return repo.find({relations: ['posts']})
    },

    async findById(id:number){
        return repo.findOne({where: {id}, relations:['posts']})
    },

    async create(data: {name:string, email:string, password:string}){
        // Cria o usuários
        const user = repo.create(data)
        // salva ele no banco
        return repo.save(user)
    },

    async delete(id:number){
        return repo.delete(id) 
    }
}