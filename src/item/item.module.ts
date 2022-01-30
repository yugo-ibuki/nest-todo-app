import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Item } from 'src/entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ItemController],
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
})
export class ItemModule {}
