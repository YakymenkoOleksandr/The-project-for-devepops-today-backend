import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Search for recipes by name
app.get('/api/search', async (req, res) => {
  const query = req.query.s;
  try {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

// Search for recipes by ingredient
app.get('/api/filter/ingredient', async (req, res) => {
  const ingredient = req.query.i;
  try {
    const response = await axios.get(
      `${API_BASE_URL}/filter.php?i=${ingredient}`,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

// Search for recipes by national cuisine
app.get('/api/filter/area', async (req, res) => {
  const area = req.query.a;
  try {
    const response = await axios.get(`${API_BASE_URL}/filter.php?a=${area}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

// Search for recipes by category
app.get('/api/filter/category', async (req, res) => {
  const category = req.query.c;
  try {
    const response = await axios.get(
      `${API_BASE_URL}/filter.php?c=${category}`,
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

// Search for a recipe by ID
app.get('/api/lookup', async (req, res) => {
  const id = req.query.i;
  try {
    const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання даних' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
