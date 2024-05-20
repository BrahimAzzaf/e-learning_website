const express = require('express');
const router = express.Router();
const cors = require('cors');
const { registerUser, loginUser, test, getProfile } = require('../controllers/authCotroller');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
);

// Routes
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};

module.exports = router


