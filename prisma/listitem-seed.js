const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // 清空现有数据（可选，确保每次 seed 时数据是干净的）
  // await prisma.listItem.deleteMany();
  await prisma.$executeRaw`TRUNCATE TABLE "ListItem" RESTART IDENTITY;`; // 清空表并重置序列

  // 定义基础数据模板
  const baseData = {
    title: '知行合一 挑战自己 ——“让自己情绪稳定”之第十六天（P2025-039-1400-301）',
    content: '2025.05.15，周四，农历四月十八，郑州，晴间多云，21—30℃ 今日父亲去世第549天 今日早上跑步6.6公里 ...',
    image: 'https://upload-images.jianshu.io/upload_images/26716289-061b45ab01b69df2.jpg?x-oss-process=image/resize,w_360,h_240',
    author: '三六吾语',
  };

  const dataList = Array.from({ length: 15 }).map((data, index) => ({
    ...baseData, // 使用上面定义的 baseData
    commentNumber: index % 5,
    likeNumber: Math.floor(index * 1.5),
    createdAt: new Date(),
    updatedAt: new Date(),
    title: (index+1)+": "+baseData.title,
  }))

  // 使用 createMany 批量插入
  const listItems = await prisma.listItem.createMany({
    data: dataList,
    skipDuplicates: true, // 可选：跳过重复数据
  });

  console.log(`成功创建 ${listItems.count} 条数据`);
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    process.exit();
  });