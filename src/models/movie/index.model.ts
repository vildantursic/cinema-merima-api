import mongoose from 'mongoose';
import movieSchema from './index.schema';

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
