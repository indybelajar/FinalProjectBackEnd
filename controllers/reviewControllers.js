import Review from '../models/review.js';
import mongoose from 'mongoose';

// Get all review
export const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new review
export const createReview = async (req, res) => {
    try {
        const reviews = new Review({
            username: req.body.username,
            NameGame: req.body.NameGame,
            Review: req.body.Review,
            Rating: req.body.Rating,
            Date: req.body.Date,
        });
        const newReview = await reviews.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update review
export const updateReview = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const updatedReview = await Review.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete review
export const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID' });
        }

        const deletedReview = await Review.findByIdAndDelete(id);

        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json(deletedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};