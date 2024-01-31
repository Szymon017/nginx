// server.js
const express = require('express');
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const carRoutes = require('./routes/CarRoutes.js');
const userRoutes = require('./routes/UserRoutes.js');

const app = express();
const port = process.env.PORT || 3000;



// MySQL
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Dodaj middleware do obsługi JSON
app.use(express.json());

// Dodaj ścieżki do routingów
app.use('/mongo', carRoutes);
app.use('/sql', userRoutes);

// Dodaj ścieżki testowe
app.get('/', (req, res) => {
  res.send('Witaj na stronie głównej!');
});

// Uruchom serwer na określonym porcie
app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
