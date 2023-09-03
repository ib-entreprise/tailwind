
// **************************
//****** */ carrousel ******
// *************************
const imageCarousel = document.getElementById("image-carousel");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;

function showImage(index) {
    // Déplace le carrousel pour afficher l'image donnée
    imageCarousel.style.transform = `translateX(-${index * 100}%)`;
}

// Affiche la première image au chargement de la page
showImage(currentImageIndex);

prevButton.addEventListener("click", () => {
    // Affiche l'image précédente
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
});

nextButton.addEventListener("click", () => {
    // Affiche l'image suivante
    if (currentImageIndex < imageCarousel.children.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
});
