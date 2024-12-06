import express from 'express';
import {getAllUsers, createUser, updateUser, deleteUser } from'../controllers/usersControllers.js';

const router = express.Router();

// Get all game
router.get('/', getAllUsers);
//Create a new game
router.post('/', createUser);
export default router;
// Update a game
router.put('/:id', updateUser);
// delete a game
router.delete('/:id', deleteUser);