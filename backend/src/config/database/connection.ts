import mongoose from 'mongoose';

const MONGO_URI = `mongodb+srv://mmtareque:${process.env.DB_CLUSTER}/${process.env.DB_NAME}`

mongoose.connect(MONGO_URI);

// Check if the connection is successful
export const db = mongoose.connection;