import express from "express";
import { addFashion, getAllFashions, searchStore } from "../controllers/fashion-controller.js";
const fashionRouter = express.Router();

// Get all fashions
fashionRouter.get("/fashion", getAllFashions);
// Add a new fashion
fashionRouter.post("/addfashion",addFashion);
// Search fashion by name
fashionRouter.get("/search/:key", searchStore);

export default fashionRouter;
