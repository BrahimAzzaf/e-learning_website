const express = require('express');
const { requireAdmin } = require('../middlewares/auth');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// router.post('/users', async (req, res) => {
//     try {
//         const { name, email, password, isAdmin } = req.body;

//         // Upload image to Firebase Storage
//         const image = req.file; // Assuming you handle file upload on the client-side

//         if (!image) {
//             return res.status(400).json({ error: 'No image provided' });
//         }

//         const storageRef = ref(storage, `images/${image.originalname}`);
//         await uploadBytes(storageRef, image.buffer);

//         // Get image download URL 
//         const imageUrl = await getDownloadURL(storageRef);

//         // Create new user in MongoDB
//         const newUser = new User({ name, email, password, isAdmin, image: imageUrl });
//         await newUser.save();

//         res.status(201).json(newUser);
//     } catch (err) {
//         console.error('Error adding user:', err);
//         res.status(500).json({ error: 'Failed to add user' });
//     }
// });

router.get('/users', requireAdmin, async (req, res) => {
    try {
        const users = await User.find({}, 'name email isAdmin'); // Fetch only necessary fields
        res.json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.get('/users/count', requireAdmin, async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json(userCount); // Return just the count as a number
    } catch (err) {
        console.error('Error fetching user count:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// GET user by ID
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
        const { name, email, isAdmin } = req.body;

        const updatedUser = await User.findByIdAndUpdate(userId, { name, email, isAdmin }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(updatedUser);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

router.post('/users', async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash with salt rounds of 10

        const newUser = new User({ name, email, password: hashedPassword, isAdmin });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Failed to add user' });
    }
});


module.exports = router;