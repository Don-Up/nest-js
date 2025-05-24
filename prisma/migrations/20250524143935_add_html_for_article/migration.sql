-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "html" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "content" SET DEFAULT '';
