import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto"; // 假设你有一个 PrismaService


@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // 创建文章
  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        authorId: createPostDto.authorId,
        image: createPostDto.image,
        commentNumber: createPostDto.commentNumber ?? 0,
        likeNumber: createPostDto.likeNumber ?? 0,
      },
    });
  }

  // 获取所有文章
  async findAll() {
    return this.prisma.post.findMany({
      include: {
        comments: true, // 包含关联的评论
      },
    });
  }

  // 获取单篇文章
  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        comments: true, // 包含关联的评论
      },
    });
  }

  // 更新文章
  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: {
        title: updatePostDto.title,
        content: updatePostDto.content,
        authorId: updatePostDto.authorId,
        image: updatePostDto.image,
        commentNumber: updatePostDto.commentNumber,
        likeNumber: updatePostDto.likeNumber,
      },
    });
  }

  // 删除文章（会级联删除关联的评论，因为 Prisma 模型中设置了外键）
  async remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}