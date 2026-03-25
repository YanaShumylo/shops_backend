import { getAllShops, getShopById } from '../services/shops.js';

export const getAllShopsController = async (req, res) => {

  const { minRating, maxRating } = req.query;

  const shops = await getAllShops({ minRating,maxRating,});
  res.json({
    status: 200,
    message: 'Successfully found shops!',
      data: shops,
  }
  );
};

export const getShopByIdController = async (req, res) => {
  const { shopId } = req.params;
  const shop = await getShopById(shopId);

  if (!shop) {
    res.status(404).json({
        message: 'Shop not found'
    }
    );
      return;
  }

  res.json({
    status: 200,
    message: `Successfully found shop with id ${shopId}!`,
      data: shop,
  }
  );
};
