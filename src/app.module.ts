import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({  //Cria a conexão padrão/raiz
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true,
      logging: true,
    }),
    PostagemModule //classe que vai definir o recurso 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
