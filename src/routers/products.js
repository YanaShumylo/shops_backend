import { Router } from "express";
import { getAllProductsController, getProductByIdController} from '../controllers/productsController.js';
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/shops/:shopId/products', ctrlWrapper(getAllProductsController));
router.get('/shops/:shopId/products/:productId', ctrlWrapper(getProductByIdController));

export default router;