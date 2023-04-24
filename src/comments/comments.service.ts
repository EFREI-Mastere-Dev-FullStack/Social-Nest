import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto
    });
  }

  async findAll() {
    return this.prisma.comment.findMany();
  }

  async findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: {
        id: id
      },
      data: updateCommentDto
      });
  }

  async remove(id: number) {
    return this.prisma.comment.delete({
      where: {
        id: id
      }
    });
  }
}
