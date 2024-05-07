import Fashion from "../model/Fashion.js";


export const getAllFashions = async (req, res, next) => {
  let fashions;
  try {
    fashions = await Fashion.find();
  } catch (err) {
    return console.log(err);
  }
  if (!fashions) {
    return res.status(404).json({ message: "No Store Found" });
  }
  return res.status(200).json({ fashions });
};

export const addFashion = async (req, res, next) => {
  const { name, level, image } = req.body;
  const fashion = new Fashion({
    name,
    level,
    image,
  });
  try {
    await fashion.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ fashion });
};
// Search fashion by name
export const searchStore = async (req, res) => {
  let data = await Fashion.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  console.log(req.params.key);
  res.send(data);
};
