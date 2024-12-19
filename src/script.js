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

    // Charger le footer
    document.addEventListener('DOMContentLoaded', () => {
        const footerContainer = document.getElementById('footer');
    
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement du footer : ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    });
});
