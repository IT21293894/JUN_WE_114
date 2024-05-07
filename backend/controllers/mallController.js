// mallController.js


import Store from "../model/Store.js";

import Store from '../model/Store.js';


// Controller function for searching stores
export const searchStore = async (req, res) => {
  const query = req.query.query;
  try {
    const result = await Store.findOne({
      name: { $regex: new RegExp(query, "i") },
    });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Store not found" });
    }
  } catch (error) {
    console.error("Error searching store:", error);
    res.status(500).json({ error: "Internal server error" });
    const result = await Store.findOne({ name: { $regex: new RegExp(query, "i") } });
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Store not found' });
    }
  } catch (error) {
    console.error('Error searching store:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
