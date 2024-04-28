const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the user schema
const errorSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    userId: { type: String },
    error: Object,
    ip: String
}, {
    timestamps: true // Add timestamps option
});

// Create a User model using the schema
export const Error = mongoose.model('error', errorSchema);