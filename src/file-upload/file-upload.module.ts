import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  controllers: [FileUploadController],
  providers: [FileUploadService]
})
export class FileUploadModule {}
