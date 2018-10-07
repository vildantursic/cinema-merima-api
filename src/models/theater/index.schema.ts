import mongoose from 'mongoose';

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numberOfSeats: {
    type: Number,
    default: 40
  },
  space: {
    type: [
      {
        row: String,
        seats: [
          {
            seat: String,
            available: Boolean
          }
        ]
      }
    ],
    required: true
  }
});
export default theaterSchema;
