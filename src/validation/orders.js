import Joi from 'joi';

export const createOrderSchema = Joi.object({
  products: Joi.array().items(
    Joi.object({
      product: Joi.string().required(),
      quantity: Joi.number().min(1).required(),
    })
  ).min(1).required(),

  name: Joi.string().trim().min(3).max(25).pattern(/^[A-Za-zА-Яа-яІіЇїЄє]+([ '-][A-Za-zА-Яа-яІіЇїЄє]+)*$/).required().messages({
      "string.pattern.base": "The name may contain only letters, spaces, hyphens, or apostrophes.",
    }),
  email: Joi.string().trim().email().lowercase().required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{7,14}$/).required().messages({
      "string.pattern.base": "Invalid phone number format.",
  }),
  address: Joi.string().trim().min(3).max(100).required().messages({
  "string.empty": "Address is required",
  "string.min": "Address must be at least 3 characters",
  "string.max": "Address cannot exceed 100 characters",
}),
});
