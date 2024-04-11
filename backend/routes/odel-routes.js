import express from "express";
import {
  addOdel,
  getAllOdels,
  searchCloth,
} from "../controllers/odel-controller";
const odelRouter = express.Router();

//Route to handle getting all clothes in odel store
odelRouter.get("/", getAllOdels);

//Route to handle cloth adding to odel store
odelRouter.post("/add", addOdel);

//Route to handle search cloth in coolplanet store
odelRouter.get("/search/:key", searchCloth);

export default odelRouter;
