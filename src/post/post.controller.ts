import { Controller, Get, Post as HttpPost, Put, Delete, Body, Param, NotFoundException, Patch } from "@nestjs/common";
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // 创建文章
  @HttpPost()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  // 获取所有文章
  @Get()
  async findAll() {
    return this.postService.findAll();
  }

  // 获取单篇文章（包括其评论）
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postService.findOne(+id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  // 更新文章
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postService.update(+id, updatePostDto);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  // 删除文章
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = await this.postService.remove(+id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return { message: `Post with ID ${id} deleted successfully` };
  }
}