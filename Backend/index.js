import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/ProjectRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
const app=express()
dotenv.config()
connectDB() 
app.use(cors());

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server running",process.env.PORT)
})