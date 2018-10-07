import mongoose from 'mongoose';
import foodSchema from './index.schema';

const Food = mongoose.model('Food', foodSchema);
export default Food;
