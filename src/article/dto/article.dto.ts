import { IsString, IsNotEmpty } from "class-validator";

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class ArticleResponseDto {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}