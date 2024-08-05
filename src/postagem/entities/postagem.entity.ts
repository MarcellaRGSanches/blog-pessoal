import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: "tb_postagens" })  //criando a tb, tem que passar o nome da tabela 
export class Postagem {
    @ApiProperty()
    @PrimaryGeneratedColumn() //chave primaria autoincremental
    id: number;

    @ApiProperty()
    @Transform(({ value }: TransformFnParams) => value?.trim()) // serve para bloquear apenas espaços em branco 
    @IsNotEmpty()// n aceitar titulo vazio
    @Column({ length: 100, nullable: false }) //Definir o tamanho e não aceitar valor 
    titulo: string;

    @ApiProperty()
    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    texto: string;

    @ApiProperty()
    @UpdateDateColumn()// A data e a hora serão preenchidas automaticamente 
    data: Date;
    //Muitos para um, ou seja, muitas postagens possuem um tema!

    @ApiProperty()
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}