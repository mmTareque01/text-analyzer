import dotenv from "dotenv"
dotenv.config();
import express from 'express';
import cors from 'cors'
import { config } from 'dotenv';
import { db } from "./src/config/database/connection";
import routerHandler from "./src/routerhandler"
import bodyParser from 'body-parser'

export const app = express();
const PORT = process.env.PORT;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

// Routes
app.use("/api", routerHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
