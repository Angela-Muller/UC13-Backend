import { UserRepository } from "../repositories/UserRepository"
import bcrypt from 'bcrypt'
import { omitPassword } from "../utils/omitPassword"

// a camada Service é Responsável por chamar os métodos de Repository e cuidads das validações das nossas regras de negócio (ex: um usúario precisa)

// Aqui estamos criando uma classe de erro que extende a classe Error
// isso é para permitir que, mais tarde, o Controller identifique o tupo de erro de uma forma mais clara
export class NotFoundError extends Error{}

export const UserService = {

    // Como para listar não precisamos validar nada, aqui só chamamos o método do Repository mesmo, pois o Controller NÂO PODE se comunicar diretamente com Repository, e sim com Service
    async listAll(){
        return UserRepository.findALL()
    },
    
    async getById(id:number) {
        const user = await UserRepository.findById(id)

        // Aqui vai nossa primeira validação 
        // Se não encontrarmos um user com esse id, ele não existe
        // se não existe, vamos lançar um erro
        if(!user){
            throw new NotFoundError('Usuário não encontrado!')
        }

        // Se encontrou, não cai no 'if' ali em cima, então podemos usar o return e retornar o user
        return user;
    },

    async create(data: {name:string, email:string, password:string}){
        // Este método gera uma senha criptografada
        const hashedPasswor = await bcrypt.hash(data.password,10)

        // isso gera um objeto que é mais ou menos assim:

        /*
            const user = {
                name: "Joãozin da quebrada",
                email: "joazinqbd@gmail.com",
                password: "$2A7806m.jfheui.97566"
            }
        */

        const user =  await UserRepository.create({
            name: data.name,
            email: data.email,
            password: hashedPasswor
        })

        return omitPassword(user)
    }

}