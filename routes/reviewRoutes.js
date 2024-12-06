import express from 'express';
import {getAllReview, createReview, updateReview, deleteReview } from'../controllers/reviewControllers.js';

const router = express.Router();

// Get all game
router.get('/', getAllReview);
//Create a new game
router.post('/', createReview);
// Update a game
router.put('/:id', updateReview);
// delete a game
router.delete('/:id', deleteReview);

export default router;