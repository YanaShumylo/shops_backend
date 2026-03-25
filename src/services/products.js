import { ProductsCollection } from '../db/models/product.js';

export const getAllProducts = async ({ shopId, categories, sortBy, order }) => {
  const filter = {shop: shopId};

  if (categories && categories.length > 0) {
    filter.category = { $in: categories };
  }

   let sortOptions = {};

  if (sortBy === 'price') {
    sortOptions.price = order === 'asc' ? -1 : 1;
  }

  if (sortBy === 'name') {
    sortOptions.name = 1;
  }

  const products = await ProductsCollection.find(filter).sort(sortOptions);
    return products;
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
    return product;
};
