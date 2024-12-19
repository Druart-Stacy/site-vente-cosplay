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