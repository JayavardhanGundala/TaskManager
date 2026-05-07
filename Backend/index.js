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
const allowedOrigins = [
  "http://localhost:5173",
  "https://task-manager-lac-six-32.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.options("*", cors());

app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server running",process.env.PORT)
})