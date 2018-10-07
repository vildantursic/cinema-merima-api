import mongoose from 'mongoose';
import theaterSchema from './index.schema';

const Theater = mongoose.model('Theater', theaterSchema);
export default Theater;
