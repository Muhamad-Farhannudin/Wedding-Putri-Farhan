/*
  Warnings:

  - Added the required column `attendance` to the `Congratulations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Congratulations" ADD COLUMN     "attendance" VARCHAR(50) NOT NULL;
