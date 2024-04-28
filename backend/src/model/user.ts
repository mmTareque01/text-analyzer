const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the user schema
const userSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    email: String,
    password: String
});

// Create a User model using the schema
export const User = mongoose.model('user', userSchema);