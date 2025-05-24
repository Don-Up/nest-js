/*
  Warnings:

  - Added the required column `html` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "html" TEXT NOT NULL;
