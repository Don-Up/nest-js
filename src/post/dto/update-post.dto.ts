import { IsString, IsInt, IsOptional, IsBoolean } from "class-validator";

export class UpdatePostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  html?: string;

  @IsInt()
  @IsOptional()
  authorId?: number;

  @IsString()
  @IsOptional()
  image?: string;

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