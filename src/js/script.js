document.addEventListener('DOMContentLoaded', () => {
    // Charger le header
    const headerContainer = document.getElementById('header');
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du header:', error);
        });
     // Charger le footer
     const footerContainer = document.getElementById('footer'); // Assurez-vous que vous avez un élément avec cet ID
     fetch('footer.html')
         .then(response => {
             if (!response.ok) {
                 throw new Error(`Erreur HTTP: ${response.status}`);
             }
             return response.text();
         })
         .then(data => {
             footerContainer.innerHTML = data;
         })
         .catch(error => {
             console.error('Erreur lors du chargement du footer:', error);
         });

 
});
document.addEventListener("DOMContentLoaded", () => {
    // Récupération des paramètres de l'URL
    const params = new URLSearchParams(window.location.search);
    const price = params.get('price') || 'Prix non spécifié'; // Prix
    const type = params.get('type') || 'accessory'; // Type d'article
    const sizes = params.get('sizes') || ''; // Tailles ou pointures
    const availability = params.get('availability') || 'Non spécifiée'; // Disponibilité
    const alt = params.get('alt') || 'Article'; // Description
    const imgSrc = params.get('imgSrc') || 'default/image.jpg'; // Image source par défaut

    // Sélection des éléments de la page
    const articleImage = document.querySelector('.article-image');
    const articleTitle = document.querySelector('.article-title');
    const articlePrice = document.querySelector('.article-price');
    const articleAvailability = document.querySelector('.article-availability');
    const sizesSection = document.querySelector('.sizes-section');
    const sizesContainer = document.querySelector('.article-sizes');
    const sizesTitle = document.querySelector('.sizes-title');
    const links = document.querySelectorAll('.image-link');
    const simageElement = document.getElementById('dynamic-image');
  
    // Mise à jour de l'image et des informations de l'article
    articleImage.src = imgSrc;
    articleImage.alt = alt;
    articleTitle.textContent = alt;
    articlePrice.textContent = price;
    articleAvailability.textContent = `Disponibilité : ${availability}`;
  
    // Gestion des tailles ou pointures
    if (type === 'suit' || type === 'shoe') {
     if (sizes) {
        sizesSection.classList.remove('hidden');
        sizesTitle.textContent = type === 'suit' ? 'Tailles disponibles :' : 'Pointures disponibles :';
        sizesContainer.innerHTML = ''; // Supprime les anciens éléments
        sizes.split(',').forEach(size => {
          const sizeElement = document.createElement('span');
          sizeElement.textContent = size.trim();
          sizeElement.className = size.toLowerCase() === 'grisé' ? 'text-gray-500' : 'text-green-500';
          sizesContainer.appendChild(sizeElement);
        });
      }
    } else {
      sizesSection.classList.add('hidden'); // Masque la section si non applicable
    }
  
    // Gestion des clics sur les liens d'image
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const newImageSrc = link.getAttribute('data-image'); // Récupère l'image associée
        imageElement.src = newImageSrc; // Met à jour l'image affichée
      });
    });
  });