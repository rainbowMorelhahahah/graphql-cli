import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import CategoryModule from './modules/mall/category.module';
import UploadModule from './modules/upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "ssmall",
      "entities": [__dirname + '/**/*.entity{.ts,.js}'],
      "synchronize": true
    }),
    CategoryModule,
    UploadModule,
    RouterModule.forRoutes([
      {
        path: '/ssmall',
        module: CategoryModule,
      },
      {
        path: '/upload',
        module: UploadModule,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
