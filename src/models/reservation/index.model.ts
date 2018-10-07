import mongoose from 'mongoose';
import reservationSchema from './index.schema';

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
