import { BaseController } from './base.controller.js';
import * as model from '../models/index.js';

export class ProductsController extends BaseController {
  all = async (req, res, next) => {
    try {
      const products = await model.Product.find({});
      res.send({ data: products });
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const product = new model.Product({ ...req.body });
      await product.save();

      res.send({ data: product });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  update = async (req, res, next) => {
    try {
      const { _id } = req.body;

      console.log(_id);
      const data = await model.Product.findById(_id);

      if (!data) {
        throw new Error('No se encontró el producto');
      }

      let doc = await model.Product.findOneAndUpdate({ _id }, req.body, {
        returnOriginal: false,
      });

      res.send({ data: doc });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };

  delete = async (req, res, next) => {
    try {
      const data = await model.Sell.remove({ _id: req.params.id });
      res.status(204).send({ data });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}