import CoolPlanet from "../model/CoolPlanet";

// Controller function for getting all clothes in coolplanet store
export const getAllCoolPlanets = async (req, res, next) => {
  let coolplanets;
  try {
    coolplanets = await CoolPlanet.find();
  } catch (err) {
    return console.log(err);
  }
  if (!coolplanets) {
    return res.status(404).json({ message: "No Clothes Found" });
  }
  return res.status(200).json({ coolplanets });
};

// Controller function for inserting clothes into coolplanet store
export const addCoolPlanet = async (req, res, next) => {
  const { name, price, image } = req.body;
  const coolplanet = new CoolPlanet({
    name,
    price,
    image,
  });
  try {
    await coolplanet.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ coolplanet });
};

// Controller function for searching clothes in coolplanet store
export const searchCloth = async (req, res) => {
  let data = await Odel.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  console.log(req.params.key);
  res.send(data);
};
