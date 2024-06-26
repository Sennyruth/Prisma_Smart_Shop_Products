import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const product = await prisma.product.findFirst({
      where: { id: id },
    });
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productPrice,
      Onoffer,
    } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        productThumbnail,
        productTitle,
        productDescription,
        productPrice,
        Onoffer,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    productThumbnail,
    productTitle,
    productDescription,
    productPrice,
    Onoffer,
  } = req.body;

  try {
    let updateuser;
    if (productThumbnail) {
      updateuser = await prisma.product.update({
        where: { id: id },
        data: {
          productThumbnail: productThumbnail,
        },
      });
    }
    if (productTitle) {
      updateuser = await prisma.product.update({
        where: { id: id },
        data: {
          productTitle: productTitle,
        },
      });
    }
    if (productDescription) {
      updateuser = await prisma.product.update({
        where: { id: id },
        data: {
          productDescription: productDescription,
        },
      });
    }
    if (productPrice) {
      updateuser = await prisma.product.update({
        where: { id: id },
        data: {
          productPrice: productPrice,
        },
      });
    }
    if (Onoffer) {
      updateuser = await prisma.product.update({
        where: { id: id },
        data: {
          Onoffer: Onoffer,
        },
      });
    }
    res.json(updateuser);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
