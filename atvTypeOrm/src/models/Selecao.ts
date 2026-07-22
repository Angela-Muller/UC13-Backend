import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Jogador } from "./Jogador";

@Entity('Selecaos')
export class Selecao {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:60, nullable:false})
    name:string

    @Column({length:60, nullable:false})
    country :string

    @Column({length:60, nullable:false})
    coach :string

    @Column({type: 'int', nullable:false})
    rankingFifa :number

    @Column({type: 'int', nullable:false})
    foundYear :number

    @OneToMany(() => Jogador, jogador =>  jogador.selecao)
    jogadores:Jogador[]
}