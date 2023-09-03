const button_tacos = document.getElementById("button_tacos");
const button_burger = document.getElementById("button_burger");
const button_pizza = document.getElementById("button_pizza");

const div_tacos = document.getElementById("div_tacos");
const div_burger = document.getElementById("div_burger");

const div_pizza = document.getElementById("div_pizza");

div_tacos.style.display = 'none';
div_burger.style.display = 'block';
div_pizza.style.display = 'none';

button_tacos.addEventListener("click", function () {
    div_tacos.style.display = 'block';
    div_burger.style.display = 'none';
    div_pizza.style.display = 'none';
});
button_burger.addEventListener("click", function () {
    div_burger.style.display = 'block';
    div_tacos.style.display = 'none';
    div_pizza.style.display = 'none';
});

button_pizza.addEventListener("click", function () {
    div_pizza.style.display = 'block';
    div_tacos.style.display = 'none';
    div_burger.style.display = 'none';
});


const div_galerie = document.getElementById('galerie');
const div_galerie_item = document.getElementById('galerie-item');

// div_galerie_item.style.display = 'none';

var galerie_image = div_galerie.querySelectorAll('img');
var modalImage = document.querySelector("#myModal img"); // Sélectionnez l'élément img de la modal

galerie_image.forEach(image => {
    image.addEventListener("mouseenter", function () {
        image.style.borderRadius = '30px';
        image.style.padding = '10px';
    });
    image.addEventListener("mouseleave", function () {
        image.style.borderRadius = '0';
        image.style.padding = '0';
    });

    image.addEventListener("click", function () {
        modalImage.src = image.src;
        document.getElementById("backgroundBlur").classList.remove("hidden");
        document.getElementById("myModal").classList.remove("hidden");
    });

});

document.getElementById("modalClose").addEventListener("click", function () {
    document.getElementById("myModal").classList.add("hidden");
    document.getElementById("backgroundBlur").classList.add("hidden");

});

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
