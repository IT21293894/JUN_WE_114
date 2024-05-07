// mallRoutes.js

import express from 'express';
import { searchStore } from '../controllers/mallController.js';

const router = express.Router();

// Route to handle store search
router.get('/search', searchStore);

// Sample data for demonstration
const stores = [
  { id: 1, name: 'Store A', floor: 'First Floor', location: 'Near the entrance', latitude: 123, longitude: 456 },
  { id: 2, name: 'Store B', floor: 'Second Floor', location: 'Opposite the escalator', latitude: 789, longitude: 321 }
];

// Route to handle store search
router.get('/search', (req, res) => {
  const query = req.query.query;
  // Mocking search functionality
  const result = stores.find(store => store.name.toLowerCase() === query.toLowerCase());
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ error: 'Store not found' });
  }
});


export default router;
