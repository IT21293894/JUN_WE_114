import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fashionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model("fashion", fashionSchema);