import mongoose from "mongoose";

const Schema = mongoose.Schema;

const odelSchema = new Schema({
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

export default mongoose.model("Odel", odelSchema);
