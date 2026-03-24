import { model, Schema } from 'mongoose';

const shopSchema = new Schema(
    {
        name: {type: String, required: true,},
        description: {type: String,},
        image: { type: String,},
    },
  {
    timestamps: true, versionKey: false,
    },
);

export const ShopsCollection = model('Shop', shopSchema);
