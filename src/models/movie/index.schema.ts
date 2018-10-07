import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  price: {
    type: Number,
    required: true
  },
  time: {
    type: [String],
    required: true
  },
  times: {
    type: [{
      time: String,
      available: {
        type: Boolean,
        default: true
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
    }],
    required: true
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater'
  }
});
export default movieSchema;
