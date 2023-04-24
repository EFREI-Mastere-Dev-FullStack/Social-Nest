import { ApiProperty } from "@nestjs/swagger";

export class CreateFollowDto {
  @ApiProperty()
  follower_id

  @ApiProperty()
  followee_id
}
