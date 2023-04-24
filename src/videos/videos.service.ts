import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}
  async create(createVideoDto: CreateVideoDto) {
    return this.prisma.video.create({
      data: createVideoDto
    });
  }

  async findAll() {
    return this.prisma.video.findMany();
  }

  async findOne(id: number) {
    return this.prisma.video.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateVideoDto: UpdateVideoDto) {
    return this.prisma.video.update({
      where: {
        id: id
      },
      data: updateVideoDto
      });
  }

  async remove(id: number) {
    return this.prisma.video.delete({
      where: {
        id: id
      }
    });
  }
}
