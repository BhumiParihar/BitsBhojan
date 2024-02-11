const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema and model for MongoDB
const cardSchema = new mongoose.Schema({
  id:String,
  name: String,
  Rating: String
});

const Card = mongoose.model('Card', cardSchema);

// Define API endpoint to fetch cards
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
