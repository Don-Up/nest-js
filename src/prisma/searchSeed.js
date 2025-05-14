const { PrismaClient } = require('@prisma/client');
const Mock = require('mockjs');

const prisma = new PrismaClient();

async function generateKeywords() {
  // Generate 30 mock records
  const mockData = Mock.mock({
    'keywords|30': [
      {
        name: '@word(3, 10)', // Generates a random word with 3-10 characters
      },
    ],
  });

  // Prepare data for Prisma
  const searchRecords = mockData.keywords.map((item) => ({
    name: item.name,
  }));

  try {
    // Insert all records into the Search table
    await prisma.search.createMany({
      data: searchRecords,
      skipDuplicates: true, // Optional: Skip duplicates if `name` is unique
    });
    console.log('Successfully seeded 30 records into the Search table.');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

generateKeywords()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });