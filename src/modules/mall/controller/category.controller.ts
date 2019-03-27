import { Controller, Get, Put, Req, Post, Param, Body } from '@nestjs/common';
import { CategroyService } from '../services/category.servoce';
import { Response } from 'src/utils/Request';

@Controller('category')
export class CategoryController {
    constructor(private readonly appService: CategroyService) { }

    @Get()
    async getQuery() {
        const query = await this.appService.getQuery();
        return query;
    }

    @Put('create')
    async createQuery(@Req() req) {
        try {
            await this.appService.createQuery(req);
            return Response(200, '操作成功');
        } catch (err) {
            return Response(500, '操作失败');
        }
    }

    @Get(':id/get')
    async infoQuery(@Param('id') id) {
        const query = await this.appService.getInfo(id);
        return Response(200, query);
    }

    @Post(':id/save')
    async saveQuery(@Param('id') id, @Body() body) {
        try {
            await this.appService.update(id, body);
            return Response(200, '操作成功');
        } catch (err) {
            return Response(500, '操作失败');
        }
    }

}
