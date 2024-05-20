const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser')
const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log('DataBase not connected', err));

// Middlewares
app.use(express.json())

app.use(cookieParser())

// Routes

app.use('/', require('./routes/authRoutes'));






// Configure CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the origin of your frontend application
    credentials: true // Allow credentials
}));


const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
