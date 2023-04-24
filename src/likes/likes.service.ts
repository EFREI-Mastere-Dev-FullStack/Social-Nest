import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) {}

  async create(createLikeDto: CreateLikeDto) {
    return this.prisma.like.create({
      data: createLikeDto
    });
  }

  async findAll() {
    return this.prisma.like.findMany();
  }

  async findOne(id: number) {
    return this.prisma.like.findUnique({
      where: {
        id: id
      }
    });
  }

  async update() {
    return `Impossible de modifier un like (like ou unlike)`;
  }

  async remove(id: number) {
    return this.prisma.like.delete({
      where: {
        id: id
      }
    });
  }
}
