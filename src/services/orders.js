import { OrdersCollection } from '../db/models/order.js';

export const getAllOrders = async () => {
  return await OrdersCollection.find().populate('products.product');
};