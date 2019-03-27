import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/entitys/Category.entity';
import { Repository, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class CategroyService {

    constructor(
        @InjectRepository(CategoryEntity)
        private readonly Repository: Repository<CategoryEntity>,
    ) {

    }

    async  getQuery(): Promise<CategoryEntity[]> {
        return await this.Repository.find({
            where: {
                status: MoreThanOrEqual(0)
            }
        });
    }

    async createQuery(@Req() req) {
        return await this.Repository.save(req.body);
    }

    async getInfo(id) {
        return await this.Repository.findOne(id);
    }

    async update(id, playlod) {
        return await this.Repository.update(id, playlod);
    }
}
