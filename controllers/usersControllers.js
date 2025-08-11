import User from '../models/user.js';
import mongoose from 'mongoose';


//Get all games
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message});

    }
};

//Create a new games
export const createUser = async (req,res) => {
    try {
    const user = new User({
        games_id: req.body.games_id,
        Name: req.body.Name,
        Developer: req.body.Developer,
        Size: req.body.Size,
        Rating: req.body.Rating,
        Downloads: req.body.Downloads
    });
        const newuser = await user.save();
        res.status(201).json(newuser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update your games
export const updateUser = async (req, res) =>  {
    try {
        const id = req.params.id;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Something wrong' });
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "Something wrong" });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        if  (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Something wrong' });
        }
        const deletedUser = await User.findByIdAndDelete(
            id,
            req.body,
            { new: true }
        );
        if (!deletedUser) {
            return res.status(404).json({ message: "Something wrong" });
        }
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
