import { Router } from "express";
import { createProductController, getProductsController } from "../../controllers/api/product.controller.js";
import checkProduct from "../../middlewares/checkProduct.js";
import AprobProduct from "../../middlewares/AprobProduct.js";

const router = Router()

router.get('/', getProductsController)
router.post('/', checkProduct, AprobProduct, createProductController)

export default router