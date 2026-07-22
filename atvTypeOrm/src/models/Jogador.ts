import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Selecao } from "./Selecao";

@Entity('Jogadores')
export class Jogador {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100, nullable:false})
    name:string

    @Column({type: 'int', nullable:false})
    numJersey :number

    @Column({length:100, nullable:false})
    position :string

    @Column({type: 'int', nullable:false})
    age :number

    @Column({type: 'int', nullable:false})
    height :number

    @Column({type: 'int', nullable:false})
    weight :number

    @Column({type: 'int', nullable:false})
    gols :number
    

    

    @ManyToOne(() => Selecao, selecao => selecao.jogadores)
    selecao:Selecao
}