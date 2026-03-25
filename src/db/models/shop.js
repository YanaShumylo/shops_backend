import { model, Schema } from 'mongoose';

const shopSchema = new Schema(
    {
        name: {type: String, required: true,},
        description: {type: String,},
        image: { type: String, },
        rating: { type: Number, min: 1, max: 5, default: 4 },
    },
  {
    timestamps: true, versionKey: false,
    },
);

export const ShopsCollection = model('Shop', shopSchema);
