import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(), ItemModule],
  providers: [AppService],
})
export class AppModule {}
