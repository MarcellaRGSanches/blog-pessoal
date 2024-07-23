import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity({ name: "tb_postagens" })  //criando a tb, tem que passar o nome da tabela 

export class Postagem {
    @PrimaryGeneratedColumn() //chave primaria autoincremental
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim()) // serve para bloquear apenas espaços em branco 
    @IsNotEmpty()// n aceitar titulo vazio
    @Column({ length: 100, nullable: false }) //Definir o tamanho e não aceitar valor 
    titulo: string;

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    texto: string;
    @UpdateDateColumn()// A data e a hora serão preenchidas automaticamente 
    data: Date;

}