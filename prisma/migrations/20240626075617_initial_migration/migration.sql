-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "product_Thumbnail" TEXT NOT NULL,
    "product_Title" TEXT NOT NULL,
    "product_Description" TEXT NOT NULL,
    "product-Price" DOUBLE PRECISION NOT NULL,
    "On-offer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_table_product_Thumbnail_key" ON "products_table"("product_Thumbnail");
