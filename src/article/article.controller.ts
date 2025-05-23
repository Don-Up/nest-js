import { Controller, Post, Body, ValidationPipe } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { CreateArticleDto } from "./dto/article.dto";

@Controller("article")
export class ArticleController {
  constructor(private readonly contentService: ArticleService) {}

  @Post("save")
  async saveContent(
    @Body(new ValidationPipe()) createArticleDto: CreateArticleDto,
  ) {
    const savedContent = await this.contentService.saveArticle(createArticleDto);
    return {
      message: "Content saved successfully",
      data: savedContent,
    };
  }
}