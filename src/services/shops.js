import { ShopsCollection } from '../db/models/shop.js';

export const getAllShops = async ({ minRating, maxRating }) => {
  const filter = {};

  const min = minRating ? Number(minRating) : null;
  const max = maxRating ? Number(maxRating) : null;

  if (min !== null && (min < 1 || min > 5)) {
    throw new Error('Invalid minRating');
  }

  if (max !== null && (max < 1 || max > 5)) {
    throw new Error('Invalid maxRating');
  }

  if (min !== null || max !== null) {
    filter.rating = {};

    if (min !== null) filter.rating.$gte = min;
    if (max !== null) filter.rating.$lte = max;
  }

  const shops = await ShopsCollection.find(filter);
    return shops;
};

export const getShopById = async (shopId) => {
  const shop = await ShopsCollection.findById(shopId);
  return shop;
};
