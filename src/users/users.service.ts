import {Injectable} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {
    }

    async create(createUserDto: CreateUserDto) {
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async followUser(id_user: number, username_follow: string) {
        const user = await this.prisma.user.findUnique({where: {id: id_user}});
        const user_follow = await this.prisma.user.findFirst({where: {username: username_follow}});
        if (user && user_follow) {
            return this.prisma.follow.create({
                data: {
                    follower_id: user.id,
                    followee_id: user_follow.id

                }
            });
        }
    }


    async update(id: number, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
            where: {
                id: id
            },
            data: updateUserDto
        });
    }

    async remove(id: number) {
        return this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }
}
