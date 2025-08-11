import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    NameGame: { type: String, required: true },
    Review: { type: String, required: true },
    Rating: { type: Number, required: true },
    Date: { type: Date, required: true }
},
{ collection: 'userreview' });
const Review = mongoose.model('Review', reviewSchema);

export default Review
