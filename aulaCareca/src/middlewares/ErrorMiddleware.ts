import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/error-handler";

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {

    console.log(err)

    if (err instanceof AppError)
        return res.status(err.statusCode).json({ mensagem: err.message})

    return res.status(500).json({ mensagem: 'Erro interno do servidor!'})
}