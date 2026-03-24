import { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: String,
        shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true }
    },

    {
        timestamps: true, versionKey: false,
    }
);

export const ProductsCollection = model('Product', productSchema);
