import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app =  express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MONGODB CONNECTED");
    }).catch((err) => {
        console.log(err);
    });

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});