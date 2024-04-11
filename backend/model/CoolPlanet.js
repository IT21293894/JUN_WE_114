import mongoose from "mongoose";

const Schema = mongoose.Schema;

const coolPlanetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("CoolPlanet", coolPlanetSchema);
