import { ApiProperty } from "@nestjs/swagger";

export class CreatePictureDto {
  @ApiProperty()
  url: string;
  @ApiProperty()
  postId: number;
}
