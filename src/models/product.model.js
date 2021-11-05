import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = Schema({
  productName: {
    type: String,
  },

  description: {
    type: String,
  },

  productPrice: {
    type: String,
  },
  status: {
    type: String,
  },
});

/*
storeSchema.options.toJSON = {
  transform: function(doc, ret, options) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
  }
};
*/

export const Product = model('Product', schema);
