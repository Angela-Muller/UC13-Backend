import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./Post";

// precisamos sinalizar ao TyperORM que esta classe será mapeada em uma tabela
// para fazer isso, utilizamos um decorator:
// @Entity('users') indica que deve ser criada uma tabela com o nome 'users'
@Entity('users')
export class User {
    // primaryGeneratedColumn() indica que esta atributo será uma coluna com PRIMARY KEY e AUTO_INCEMENT
    @PrimaryGeneratedColumn()
    id:number;

    // @column marca o atributo como uma coluna 'normla'
    // length diz qual o tamnho máximo de caracteres
    // nullable:flase diz que não pode ser nula (tipo o NOT NULL)
    @Column({length:150, nullable:false})
    name:string;

    // unique:true marca a coluna como tendo um valor único (que não pode repetir)
    @Column({length:100, unique:true})
    email:string;

    @Column({nullable:false})
    password:string;

    // @OneToMany() indica que um User pode ter vários Post
    // Precisamos passar dois parâmetros:
    // () => Post -> função que retorna a entidade relacionada
    // post => post.user -> indica qual a propriedade na classe Post que referencia o User
    // Com tudo isso definido, o TypeORM consegue criar automaticamente ligações entre as tabelas e as chaves entrangeiras.
    // temos que fazer sempre para todos os envolvidos, nesse caso, tanto para User quanto para Post
    @OneToMany(() => Post, post => post.user)
    posts:Post[]
}