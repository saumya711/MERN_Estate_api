import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.routes.js'

const app =  express();
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MONGODB CONNECTED");
    }).catch((err) => {
        console.log(err);
    });

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});