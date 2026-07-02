
// Ele valida se name, email e password forem preenchidos corretamente

import { NextFunction, Request, Response } from "express";

export function validateUser(req:Request, res: Response, next:NextFunction){

    //pega os dados que vieram do corpo da requisição
    const {name, email, password} = req.body

    //vamos fazer a validação agora
    if(!name || !email || !password){
        // status 400 é Bad Request (Requisição mal formada)
        return res.status(400).json({
            message: "Os campos name, email e password são obrigatórios, seu jaguara."
        })
    }

    // Senha não pode ter menos de 6 caracteres
    if (password.length < 6){
        return res.status(400).json({
            message: "A senha deve ter pelo menos 6 caracteres, seu bobão"
        })
    }

    // Se passou em todas verificações, então deixamos requisiçãp seguir adiante e passar pela fronteira com o Basil com as muambas do Paraguai:
    next()
    
}
