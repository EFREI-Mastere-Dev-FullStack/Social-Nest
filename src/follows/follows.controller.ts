import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowsService } from './follows.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('follows')
export class FollowsController {
  constructor(private readonly followsService: FollowsService) {}

  @Post()
  create(@Body() createFollowDto: CreateFollowDto) {
    return this.followsService.create(createFollowDto);
  }

  @Get()
  findAll() {
    return this.followsService.findAll();
  }

  @Get('follower/:id')
  findAllFollowers(@Param('id') id: string) {
    return this.followsService.findAllFollowers(+id);
  }

  @Get('followee/:id')
  findAllFollowees(@Param('id') id: string) {
    return this.followsService.findAllFollowees(+id);
  }


  @Patch(':id')
  update() {
    return this.followsService.update();
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('from') from: string) {
    return this.followsService.remove(+id, +from);
  }
}
