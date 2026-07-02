import { User } from '../models/User'
import { db } from '../config/database'

export class UserService {
    
    // na camada Service é que vamos ter os métodos para trabalhar com o banco
    // é aqui que garantimos nossas regras de negócio
    // e também fazemos validações
    // 1 - vai receber os dados para inserir no banco
    // 2 - vai validar se os dados estão de acortdo
    // 3 - vai fazer a inserção no banco

    async create(email:string, password:string) {

        //validação (mesmo que simples, já é algo)
        if (email.length == 0 || password.length == 0){
            throw new Error("Informações mão podem estar vazias!")
        }

        const user = new User(email, password);

        const [result] = await db.query(
            'INSERT INTO usuarios (email, password) VALUES (?, ?)',
            [user.getEmail(), user.getPassword()]
        )
        return result
    }

    // READ - ler
    async findALL(){
        const [rows] = await db.query(
            "Select * FROM usuarios"
        )
        return rows
    }

    // READ - ler

    async findById(id: number){
        const [rows]: any = await db.query(
            "SELECT * FROM usuarios WHERE id = ?"
            [id]
        )
        return rows[0]
    }
    async update(
        id: number,
        email: string,
        password: string
    ){
        const [result] = await db.query(
            `UPDATE usuarios SET email = ?, password = ? WHERE id = ?`,
            [
                email,
                password,
                id
            ]
        )
        return result
    }

    // DELETE - remover

    async delete(id: number) {
        const [result] = await db.query(
            `DELETE FROM usuarios WHERE id = ?`,
            [id]
        )
        return result
    }
}