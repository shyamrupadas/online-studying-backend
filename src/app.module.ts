import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.k5gh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')]
})
export class AppModule {}