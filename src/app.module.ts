import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { Module } from "@nestjs/common";

@Module({
  imports: [SearchModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
