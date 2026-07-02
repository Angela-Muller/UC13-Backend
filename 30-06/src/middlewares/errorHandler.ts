import { NextFunction, Request, Response } from "express";

// Esse middleware vai formatar cada resposta de erro. Ao invês de cada controller ter que pegar um erro e formatar a mensagem bonitinha, ele faz isso pra todo mundo, tipo aquele amigo que faz todo o trabalho enquanto tu ficou no celular.
export function erroHandler(error:any, req:Request, res:Response){

    // Antes de mais nada, a gente mostra o erro "na forma original" dele pra debugar
    // Se vc n sabe oq é debugar, pesquisa no google
    console.error("Erro capturado pelo errorHandler: ", error)

    // Esse tal de 'er_DUP_ENTRY' é específico do MySQL: ele acontece quando a gente tenta salvar algo já existe e tem UNIQUE (exemplo: criar um usuário com um email já existente)
    if (error.code === 'ER_DEP_ENTRY') {
        // Status 409 é para entrada duplicada
        return res.status(409).json({
            messege: 'Registro duplicado (email já existente).'
        })
    }

    // se for qualquer outro erro que a gente não previu pq n tem bola de cristal, ele vira um 500 genérico
    return res.status(500).json({
        message: "Erro interno do servidor. Traduzindo: DEU RUIM, GURUZADA!"
    })
}