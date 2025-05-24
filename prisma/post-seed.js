const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // 清空现有数据（可选，确保每次 seed 时数据是干净的）
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  // await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY;`; // 清空表并重置序列


  // 创建一些示例文章
  const posts = await Promise.all([
    prisma.post.create({
      data: {
        title: 'First Post',
        content: 'This is the content of the first post.',
        html: '<p>This is the content of the first post.</p>',
        authorId: 1,
        image: 'https://example.com/image1.jpg',
        commentNumber: 5,
        likeNumber: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
    prisma.post.create({
      data: {
        title: 'Second Post',
        content: 'This is the content of the second post.',
        html: '<p>This is the content of the second post.</p>',
        authorId: 1,
        image: 'https://example.com/image2.jpg',
        commentNumber: 3,
        likeNumber: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
  ]);

  // 为每个文章创建关联的评论
  await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Great post!',
        postId: posts[0].id,
        createdAt: new Date(),
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Thanks for sharing.',
        postId: posts[0].id,
        createdAt: new Date(),
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Interesting read.',
        postId: posts[1].id,
        createdAt: new Date(),
      },
    }),
  ]);

  console.log('Seeding completed successfully.');
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    process.exit();
  });