import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

  async create(createFollowDto: CreateFollowDto) {
    return this.prisma.follow.create({
      data: createFollowDto
    });
  }

  async findAll() {
    return this.prisma.follow.findMany();
  }

  update() {
    return `TIENS TIENS TIENS ! Action non autorisée (on modifie pas de follow soit t'unfollow soit tu follow)`;
  }

  remove(followeeId: number, followerId: number) {
    return this.prisma.follow.deleteMany({
      where: {
        followeeId: followeeId,
        followerId: followerId
      }
    })
  }

  findAllFollowers(id: number) {
    return this.prisma.follow.findMany({
      where: {
        followeeId: id // On regarde toutes les personnes qui suivent l'utilisateur
      }
    });
  }

  findAllFollowees(id: number) {
    return this.prisma.follow.findMany({
      where: {
        followerId: id // On regarde toutes les personnes que l'utilisateur suit
      }
    });
  }

}
