const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configuration pour servir les fichiers statiques (images, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour analyser les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Route principale : Afficher le formulaire d'inscription
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour l'inscription (par exemple, après la soumission du formulaire)
app.post('/inscription', (req, res) => {
  const { username, email, password } = req.body;
  // Logique d'inscription ici (enregistrer dans une base de données, etc.)
  res.send(`Merci pour votre inscription, ${username}!`);
});

// Route pour afficher le formulaire de login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route pour gérer la soumission du formulaire de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Logique de connexion ici (vérification des identifiants, etc.)
  res.send(`Bienvenue, ${email}!`);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
