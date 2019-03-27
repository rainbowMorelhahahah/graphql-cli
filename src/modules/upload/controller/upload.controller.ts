import { Controller, Post, UseInterceptors, FileInterceptor, UploadedFile } from "@nestjs/common";
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as dayjs from 'dayjs';
import * as fs from 'fs';
import { Response } from "src/utils/Request";

let path = `/uploads/${dayjs().format('YYYYMMDD')}/`;

@Controller()
export default class UploadController {

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: function (req, file, cb) {
                var pathSync = './public' + path;
                if (!fs.existsSync(pathSync)) {
                    fs.mkdirSync(pathSync, { recursive: true });
                }
                cb(null, pathSync);
            },
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    uploadFile(@UploadedFile() file) {
        return Response(200, `${path}${file.filename}`);
    }
}