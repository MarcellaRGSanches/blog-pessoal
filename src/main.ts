import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Blog Pessoal')
    .setContact("Marcella R. G. Sanches", "rochaamarcellaaa@gmail.com", "https://github.com/MarcellaRGSanches")
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';
  app.useGlobalPipes(new ValidationPipe());  //Habilitamos o Validation Globalmente 
  app.enableCors();  //habilitamos requisições de outras origens (Servidores). Faz com que o backend vá pra o front

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
