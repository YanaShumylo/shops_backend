import express from 'express';
import productsRouter from './products.js';
import shopsRouter from './shops.js';

const router = express.Router();

router.use('/api', shopsRouter);

router.use('/api', productsRouter);

export default router;
