import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = Schema({
  status: {
    type: String,
  },

  rol: {
    type: String,
  },

  email: {
    type: String,
    unique: true,
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

export const User = model('User', schema);
