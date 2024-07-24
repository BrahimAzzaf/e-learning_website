const express = require('express');
const { requireAdmin } = require('../middlewares/auth');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Fetch all users
router.get('/users', requireAdmin, async (req, res) => {
    try {
        const users = await User.find({}, 'name email isAdmin image'); // Fetch necessary fields
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Fetch user count
router.get('/users/count', requireAdmin, async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json(userCount); // Return count
    } catch (err) {
        console.error('Error fetching user count:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Fetch user by ID
router.get('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Delete user by ID
router.delete('/users/:userId', requireAdmin, async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Update user by ID
router.put('/users/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const { name, email, isAdmin, password, image } = req.body;

        const updateData = { name, email, isAdmin, image };

        if (password) {
            updateData.password = await bcrypt.hash(password, 10); // Hash password if provided
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    try {
        const { name, email, password, isAdmin, image } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, isAdmin, image });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Failed to add user' });
    }
});

module.exports = router;
