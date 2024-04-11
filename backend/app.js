import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import odelRouter from "./routes/odel-routes";
import coolplanetRouter from "./routes/coolplanet-router";
import router from "./routes/mallRotes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/odel", odelRouter);
app.use("/api/coolplanet", coolplanetRouter);

// Route for mall search
app.use("/api/mall", router);

mongoose
  .connect(
    "mongodb+srv://admin:1zoLtWfZGywrzzEi@cluster0.dzwv3p2.mongodb.net/Mall?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected To Database and Listentng To Localhost 5000")
  )
  .catch((err) => console.log(err));

//1zoLtWfZGywrzzEi
//admin
