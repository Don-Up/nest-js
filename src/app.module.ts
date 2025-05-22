import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { Module } from "@nestjs/common";
import { HomeModule } from './home/home.module';
import { PostModule } from './post/post.module';
import { ListModule } from './list/list.module';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [SearchModule, PrismaModule, UserModule, HomeModule, PostModule, ListModule, FileUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
