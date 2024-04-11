import Odel from "../model/Odel";

// Controller function for getting all clothes in odel store
export const getAllOdels = async (req, res, next) => {
  let odels;
  try {
    odels = await Odel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!odels) {
    return res.status(404).json({ message: "No Clothes Found" });
  }
  return res.status(200).json({ odels });
};

// Controller function for inserting clothes into odel store
export const addOdel = async (req, res, next) => {
  const { name, price, image } = req.body;
  const odel = new Odel({
    name,
    price,
    image,
  });
  try {
    await odel.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ odel });
};

// Controller function for searching clothes in odel store
export const searchCloth = async (req, res) => {
  let data = await Odel.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  console.log(req.params.key);
  res.send(data);
};
