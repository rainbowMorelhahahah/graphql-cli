import { Module } from '@nestjs/common';
import { CategoryController } from './controller/category.controller';
import { CategroyService } from './services/category.servoce';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entitys/Category.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CategoryEntity])
    ],
    controllers: [CategoryController],
    providers: [CategroyService]
})
export default class CategoryModule { }
