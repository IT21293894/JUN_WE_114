import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fashionRouter from "./routes/fashion-routes.js";
import mallRoutes from './routes/mallRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/fashion", fashionRouter);
// Route for mall search
app.use('/api/mall', mallRoutes);
mongoose
  .connect(
    "mongodb+srv://admin:1zoLtWfZGywrzzEi@cluster0.dzwv3p2.mongodb.net/Mall?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected To Database and Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));