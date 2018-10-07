import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L'],
    required: true
  },
  image: String,
  type: {
    type: String,
    enum: ['snack', 'drink', 'sweet'],
    required: true
  }
});
export default foodSchema;
