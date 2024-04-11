const odelRouter = express.Router();
import express from "express";
import {
  addCoolPlanet,
  getAllCoolPlanets,
  searchCloth,
} from "../controllers/coolplanet-controller";
const coolplanetRouter = express.Router();

//Route to handle getting all clothes in coolplanet store
coolplanetRouter.get("/", getAllCoolPlanets);

//Route to handle cloth adding to coolplanet store
coolplanetRouter.post("/add", addCoolPlanet);

//Route to handle search cloth in coolplanet store
coolplanetRouter.get("/search/:key", searchCloth);

export default coolplanetRouter;
