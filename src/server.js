const express = require('express');
const cors = require('cors');
const app = express();

// Autoriser les requêtes de localhost uniquement
const corsOptions = {
  origin: 'http://localhost:3000', // Remplacez par l'URL de votre app locale
};

app.use(cors(corsOptions));

// Servir les fichiers statiques (tailwind, autres assets, etc.)
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
