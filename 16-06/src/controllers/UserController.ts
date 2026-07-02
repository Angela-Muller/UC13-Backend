import { Request, Response } from "express";
import { UserService } from "../services/UserService";

// REsponsabilidade
// Cria os métodos que vão ser chamados nas rotas
// é aqui tembém que enviamos os status e a resposta do servidor
// ele chama os métodos que criamos em service
// é ele que recebe as requisições
// e ele que envia as respostas

export class UsuarioController{
    private service = new UserService()
    async createUsuario( req: Request, res: Response){

        try{
            const{email, password} = req.body

            if(!email || !password){
                // STATUS 400 - > Bad Request(requisição mal formada)
                return res.status(400).json({ mensagem: "Email e senha são obrigatórios"})
            }

            await this.service.create(email, password)
            // STATUS 201 - > criado com sucesso
            return res.status(201).json({mensagem: "Usuário criado com sucesso!"})

        } catch{
            // STATUS 500 - > Erro interno do servidor
            return res.status(500).json({mensagem: "Erro interno do servidor"})

        }
    }
    async listUsuarios (req: Request, res: Response){

        try{
            const usuarios = await this.service.findALL()
            // STATUS 200 - > OK 👍
            return res.status(200).json(usuarios)

        }catch {
            // STATUS 500 - > Erro interno do servidor
            return res.status(500).json({mensage: "Erro interno no servidor"})

        }
    }
    async getUsuario(req: Request, res: Response){

        try{
            const id = Number(req.params.id)

            const usuario = await this.service.findById(id)

            if(!usuario){
                // STATUS 404 - > NOT FOUND (Não encontrado)
                return res.status(404).json({mensagem: "Usuario não encontrado"})
            }

            // STATUS 200 - > OK 👍
            return res.status(200).json(usuario)

        }catch {
            // STATUS 500 - > Erro interno do servidor
            return res.status(500).json({mensage: "Erro interno no servidor"})
        }
    }

    async updateUsuario(req: Request, res: Response){

        try{
            const id = Number(req.params.id)

            const {email, password} = req.body

             if(!id || !email || !password ) {
                return res.status(400).json({
                    message: "Informações inexistentes!"
                })
            }


            await this.service.update(id, email, password)

            // STATUS 200 - > OK 👍
            return res.status(200).json({mensagem: "Usuário atualizado com sucesso"})

        } catch {
            // STATUS 500 - > Erro interno do servidor
            return res.status(500).json({mensagem: "Erro interno do servidor"})
        }

    }
    async deleteUsuario(req: Request, res: Response){

        try{
            const id = Number(req.params.id)

            await this.service.delete(id)
            // STATUS 204 - > 
            return res.status(204).send()
        } catch{
            // STATUS 500 - > Erro interno do servidor
            return res.status(500).json({mensagem: "Erro interno no servidor"})

        }
    }
}