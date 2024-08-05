import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DevService,
      // useClass: ProdService,
      imports: [ConfigModule],
    }),
    PostagemModule, //classe que vai definir o recurso 
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
