import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  author: string;

  @IsString()
  image: string;

  @IsInt()
  @IsOptional()
  commentNumber?: number;

  @IsInt()
  @IsOptional()
  likeNumber?: number;
}