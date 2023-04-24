import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from "./categories/categories.module";
import { PostsModule } from './posts/posts.module';
import { PicturesModule } from './pictures/pictures.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [PrismaModule, UsersModule, CategoriesModule, PostsModule, PicturesModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
