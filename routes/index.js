import express from "express";
import mongoose from "mongoose";
import usersRouter from './usersRoutes.js';
import reviewRoutes from './reviewRoutes.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/games');
const db = mongoose.connection;

// Error handling
db.on('error', (err) => {
    console.error('Connection error:', err);
});

// Connect to database
db.once('open', () => {
    console.log('Yey! Kamu berhasil connect ke database');
});

app.use(express.json());
// Routes for games
app.use('/usergames', usersRouter);
// Routes for reviews
app.use('/review', (req, res, next) => {
    req.db = db; 
    next();
}, reviewRoutes);

app.get('/', (req, res) => {
    res.json({ message: '== Selamat datang di play store ^^ ==' });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
