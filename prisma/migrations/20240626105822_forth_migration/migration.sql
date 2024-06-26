/*
  Warnings:

  - Added the required column `product_Thumbnail` to the `products_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products_table" ADD COLUMN     "product_Thumbnail" TEXT NOT NULL;
