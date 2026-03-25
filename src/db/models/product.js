import { Schema, model } from 'mongoose';

export const ProductCategories = [
  'Burgers',
  'Pizza',
  'Sushi',
  'Pasta',
  'Salads',
  'Soups',
  'Drinks',
  'Coffee',
  'Desserts',
  'Ice Cream',
  'Fries',
  'Snacks',
  'Healthy Food',
  'Vegan',
  'Street Food'
];

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        category: { type: String, enum: ProductCategories, required: true },
        shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true }
    },

    {
        timestamps: true, versionKey: false,
    }
);

export const ProductsCollection = model('Product', productSchema);
