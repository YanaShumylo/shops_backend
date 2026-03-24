import { Router } from "express";
import { getAllShopsController, getShopByIdController} from '../controllers/shopsController.js';
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/shops', ctrlWrapper(getAllShopsController));
router.get('/shops/:shopId', ctrlWrapper(getShopByIdController));

export default router;
