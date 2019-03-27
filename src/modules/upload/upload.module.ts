import { Module } from '@nestjs/common';
import UploadController from './controller/upload.controller';

@Module({
    imports: [
    ],
    controllers: [
        UploadController
    ],
    providers: []
})
export default class UploadModule { }
