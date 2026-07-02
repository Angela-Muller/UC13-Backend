import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from "dotenv";
import { User } from '../models/User';
import { Post } from '../models/Post';


dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } = process.env; // Destruturação

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT ),
    username: DB_USER,
    password: DB_PWD,
    database: DB_NAME,

    synchronize: true,

    logging: true,

    entities: [User, Post],
});