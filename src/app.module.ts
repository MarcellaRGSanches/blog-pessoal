import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({  //Cria a conexão padrão/raiz
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    PostagemModule, //classe que vai definir o recurso 
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
