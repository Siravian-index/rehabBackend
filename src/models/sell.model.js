import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = Schema({
  clientName: {
    type: String,
  },

  clientID: {
    type: String,
  },
  totalValue: {
    type: String,
  },

  sellerName: {
    type: String,
  },
  products: [
    {
      productName: String,
      productPrice: String,
      productAmount: String,
    },
  ],
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

export const Sell = model('Sell', schema);
