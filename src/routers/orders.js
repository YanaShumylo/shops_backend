import { Router } from 'express';
import { createOrderController } from '../controllers/ordersController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createOrderSchema } from '../validation/orders.js';
import { getAllOrdersController } from '../controllers/ordersController.js';

const router = Router();

router.post('/orders', validateBody(createOrderSchema), ctrlWrapper(createOrderController));

router.get('/orders', ctrlWrapper(getAllOrdersController));

export default router;
