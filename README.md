## Site de vente pour une boutique de cosplay

Création d'un site d'une boutique fictive ou ont vent des cosplay déja fait ou de quoi les fabriquer ,anssi  que des wig et  des accessoirs


## Structure du projet 📂

.vscode/             # Paramètres de VSCode  
src/  
│── img/             # Dossier des images  
│   ├── accessoire/  # Images d'accessoires  
│   ├── arme/        # Images d'armes  
│   ├── hat/         # Images de chapeaux  
│   ├── livre/       # Images de livres  
│   ├── shows/       # Images de spectacles  
│   ├── tenue/       # Images de tenues  
│   ├── wig/         # Images de perruques  
│   ├── fond.png     # Image de fond principale  
│   ├── promo1.jpg   # Image promotionnelle  
│   ├── taches.webp  # Image de taches  
│   └── tree-2458047_1280.png # Image d'arbre  
│── craft.html       # Page HTML "Craft"  
│── hat.html         # Page HTML "Hat"  
│── index.html       # Page principale  
│── input.css        # Fichier CSS principal  
│── output.css       # Fichier CSS généré par Tailwind CSS  
│── makup.html       # Page HTML "Makup"  
│── mew.html         # Page HTML supplémentaire  
│── shows.html       # Page HTML "Shows"  
│── suit.html        # Page HTML "Suit"  
│── wig.html         # Page HTML "Wig"


## Configuration de Tailwind CSS 🚀
Pour utiliser Tailwind CSS dans ce projet, suis ces étapes :

1. Installation de Tailwind CSS via npm
Assure-toi d'avoir Node.js installé. Ensuite, exécute ces commandes dans ton terminal :

bash
Copier le code
npm init -y            # Initialiser le projet Node
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init   # Créer le fichier de configuration
2. Configurer Tailwind
Modifie le fichier tailwind.config.js :

javascript
Copier le code
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Chemin des fichiers HTML/JS
  theme: {
    extend: {},
  },
  plugins: [],
}
3. Ajouter Tailwind CSS dans input.css
Ouvre input.css et ajoute ces directives :

css
Copier le code
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Compiler Tailwind CSS
Exécute la commande suivante pour compiler Tailwind dans un fichier CSS utilisable :

bash
Copier le code
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
5. Intégrer Tailwind dans HTML
Ajoute la ligne suivante dans la balise <head> de tes fichiers HTML :

html
Copier le code
<link href="./output.css" rel="stylesheet">
Exécution du projet 🌟
Ouvre index.html dans ton navigateur.
Personnalise les fichiers HTML et utilise les classes de Tailwind CSS pour styliser ton projet.
Exemples de classes Tailwind CSS 🎨
html
Copier le code
<div class="p-4 bg-blue-500 text-white text-center rounded-lg">
  Bienvenue dans mon projet avec Tailwind CSS !
</div>

## Auteurs ✨
[Druart Stacy]
Projet créé avec ❤️ et Tailwind CSS.



