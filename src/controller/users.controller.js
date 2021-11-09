import * as model from '../models/index.js';


export class UserController {
  all = async (req, res, next) => {

    const data = await model.User.find({})
    res.send({ data });
  };

  verify = async (req, res, next) => {

    const { email } = req.body


    let data = await model.User.findOne({ email })

    if (!data) {

      const product = new model.User({
        email,
        rol: 'usuario',
        status: 'pendiente'
      });
      await product.save();
      data = await model.User.findOne({ email })
    }


    res.send({ data });
  };
  update = async (req, res, next) => {
    try {
      const { _id } = req.body;
      delete req.body.email


      console.log(_id);
      const data = await model.User.findById(_id);

      if (!data) {
        throw new Error('User not found');
      }

      let doc = await model.User.findOneAndUpdate({ _id }, req.body, {
        returnOriginal: false,
      });

      res.send({ data: doc });
    } catch (e) {
      console.log(e);
      next(e);
    }

  }
}
