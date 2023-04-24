import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  category_id: number;
}
