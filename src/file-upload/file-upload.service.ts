import { Injectable } from '@nestjs/common';
import { join } from 'node:path/win32';
import * as fs from "node:fs";

@Injectable()
export class FileUploadService {
  async saveFile(file: Express.Multer.File): Promise<string> {
    const uploadPath = join(__dirname, '..', '..', 'uploads');

    if (!fs.existsSync(uploadPath)){
      fs.mkdirSync(uploadPath, {recursive: true})
    }

    return `/uploads/${file.filename}`
  }
}
