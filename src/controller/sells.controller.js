import * as model from '../models/index.js';

export class SellsController {
  all = async (req, res, next) => {
    try {
      const data = await model.Sell.find({});
      res.send({ data });
    } catch (error) {
      next(error);
      console.log(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const product = new model.Sell({ ...req.body });
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
      const data = await model.Sell.findById(_id);

      if (!data) {
        throw new Error('Sell not found');
      }

      let doc = await model.Sell.findOneAndUpdate({ _id }, req.body, {
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
      //  const data = await model.Sell.remove({ _id: req.params.id });

      console.log(req.params.id);
      const data = await model.Sell.findById(req.params.id);

      if (!data) {
        throw new Error('Sell not found');
      }

      await data.remove();

      res.status(204).send({ data });
    } catch (e) {
      console.log(e);
      next(e);
    }
  };
}
