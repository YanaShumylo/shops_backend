import { OrdersCollection } from '../db/models/order.js';
import { getAllOrders } from '../services/orders.js';

export const createOrderController = async (req, res) => {
  const { products, name, email, phone, address } = req.body;

  const order = await OrdersCollection.create({
    products,
    name,
    email,
    phone,
    address,
  });

  res.status(201).json({
    status: 201,
    message: 'Order created successfully',
    data: order,
  });
};

export const getAllOrdersController = async (req, res) => {
  const orders = await getAllOrders();

  res.json({
    status: 200,
    message: 'Successfully fetched orders',
    data: orders,
  });
};