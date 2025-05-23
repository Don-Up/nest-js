import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { ArticleResponseDto, CreateArticleDto } from "./dto/article.dto";

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async saveArticle(dto: CreateArticleDto): Promise<ArticleResponseDto> {
    const savedArticle = await this.prisma.article.create({
      data: {
        content: dto.content,
      },
    });
    return {
      id: savedArticle.id,
      content: savedArticle.content,
      createdAt: savedArticle.createdAt,
      updatedAt: savedArticle.updatedAt,
    };
  }
}
