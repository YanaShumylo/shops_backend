import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
    }
    ],
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
}, {
  timestamps: true,
  versionKey: false,
});

export const OrdersCollection = model('Order', orderSchema);