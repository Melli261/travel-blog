window.customScrollLeft = function(id) {
    var gallery = document.getElementById(id);
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
}

window.customScrollRight = function(id) {
    var gallery = document.getElementById(id);
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
}


// Bilder und Vollbild-Container auswählen
const galleryImages = document.querySelectorAll('.gallery img');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeBtn = document.getElementById('close-btn');

// Funktion: Bild im Vollbild anzeigen
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        fullscreenImage.src = image.src; // Setze die Quelle des Vollbild-Bildes
        fullscreenContainer.style.display = 'flex'; // Zeige den Vollbild-Container
    });
});

// Funktion: Vollbild schließen
closeBtn.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none'; // Verstecke den Vollbild-Container
});

// Schließen mit Klick außerhalb des Bildes
fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
        fullscreenContainer.style.display = 'none'; // Verstecke den Vollbild-Container
    }
});