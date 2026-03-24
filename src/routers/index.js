import express from 'express';
import productsRouter from './products.js';
import shopsRouter from './shops.js';
import ordersRouter from './orders.js';

const router = express.Router();

router.use('/api', shopsRouter);

router.use('/api', productsRouter);

router.use('/api', ordersRouter);

export default router;
