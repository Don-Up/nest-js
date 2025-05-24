import { IsString, IsNotEmpty } from "class-validator";

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class ArticleResponseDto {
  id: number;
  content: string;
  html: string;
  createdAt: Date;
  updatedAt: Date;
}