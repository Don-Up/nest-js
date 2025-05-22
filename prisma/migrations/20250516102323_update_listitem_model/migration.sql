/*
  Warnings:

  - You are about to drop the column `homeId` on the `ListItem` table. All the data in the column will be lost.
  - You are about to drop the `Home` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ListItem" DROP CONSTRAINT "ListItem_homeId_fkey";

-- AlterTable
ALTER TABLE "ListItem" DROP COLUMN "homeId";

-- DropTable
DROP TABLE "Home";
