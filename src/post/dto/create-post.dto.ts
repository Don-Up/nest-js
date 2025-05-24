import { IsString, IsInt, IsOptional, isIn, IsBoolean } from "class-validator";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  html: string;

  @IsInt()
  authorId: number;

  @IsString()
  @IsOptional()
  image: string;

  @IsInt()
  @IsOptional()
  commentNumber?: number;

  @IsInt()
  @IsOptional()
  likeNumber?: number;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}