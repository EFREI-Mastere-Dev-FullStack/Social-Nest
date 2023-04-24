import { ApiProperty } from "@nestjs/swagger";

export class CreateVideoDto {
  @ApiProperty()
  url: string;
  @ApiProperty()
  postId: number;
}
