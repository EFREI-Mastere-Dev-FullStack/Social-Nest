import { Module } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { PicturesController } from './pictures.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [PicturesController],
  providers: [PicturesService],
  imports: [PrismaModule]
})
export class PicturesModule {}
