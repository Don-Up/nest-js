/*
  Warnings:

  - You are about to drop the column `author` on the `Post` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "author",
ADD COLUMN     "authorId" INTEGER NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "commentNumber" SET DEFAULT 0,
ALTER COLUMN "likeNumber" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
