// script.js
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

   // script.js

// Function to load the footer dynamically
function loadFooter() {
    // Fetch the footer.html file
    fetch('footer.html')
      .then(response => {
        if (response.ok) {
          return response.text();  // Read the file as text
        } else {
          throw new Error('Failed to load footer.html');
        }
      })
      .then(data => {
        // Insert the footer content into the #footer div
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
      });
  }
  
  // Call the loadFooter function when the page loads
  window.onload = loadFooter;
})