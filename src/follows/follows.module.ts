import { Module } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { FollowsController } from './follows.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  controllers: [FollowsController],
  providers: [FollowsService],
  imports: [PrismaModule]
})
export class FollowsModule {}
