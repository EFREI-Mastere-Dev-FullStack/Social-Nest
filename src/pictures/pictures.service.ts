import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PicturesService {
  constructor(private prisma: PrismaService) {}

  async create(createPictureDto: CreatePictureDto) {
    return this.prisma.picture.create({
      data: createPictureDto
    });
  }

  async findAll() {
    return this.prisma.picture.findMany();
  }

  async findOne(id: number) {
    return this.prisma.picture.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    return this.prisma.picture.update({
      where: {
        id: id
      },
      data: updatePictureDto
    });
  }

  async remove(id: number) {
    return this.prisma.picture.delete({
      where: {
        id: id
      }
    });
  }
}
