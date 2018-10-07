import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  reservationTime: {
    type: Date,
    required: true
  },
  movieTime: Date,
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater',
    required: true
  },
  price: {
    type: String,
    required: true
  },
  numberOfTickets: {
    type: Number,
    required: true,
    default: 1
  },
  seats: {
    type: [String],
    required: true
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
export default reservationSchema;
