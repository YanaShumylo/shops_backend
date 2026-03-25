import { getAllProducts, getProductById } from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const { shopId } = req.params;
  const { category, sortBy, order } = req.query;
  const categories = category ? category.split(',') : [];
  const products = await getAllProducts({ shopId, categories, sortBy, order, });

  res.json({
    status: 200,
    message: 'Successfully found products!',
      data: products,
  }
  );
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    res.status(404).json({
        message: 'Product not found'
    }
    );
      return;
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
      data: product,
  }
  );
};
