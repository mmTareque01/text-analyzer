const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the user schema
const textSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    userId: { type: String, },
    content: String,
    totalWords: Number,
    totalSentence: Number,
    totalParagraph: Number,
    totalCharacters: Number,
    longestWord: String,
});

// Create a User model using the schema
export const Text = mongoose.model('text', textSchema);