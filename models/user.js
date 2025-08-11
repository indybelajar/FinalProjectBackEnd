 import mongoose from 'mongoose';

 const userSchema = new mongoose.Schema({
    games_id: { type: String, required: true },
    Name: { type: String, required: true },
    Developer: { type: String, required: true },
    Size: { type: String, required: true },
    Rating: { type: String, required: true },
    Downloads: { type: String, required: true }

 }, { collection: 'usergames' });
const User = mongoose.model('usergames', userSchema);
 export default User;