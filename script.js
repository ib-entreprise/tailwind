const button_tacos = document.getElementById("button_tacos");
const button_burger = document.getElementById("button_burger");
const button_pizza = document.getElementById("button_pizza");
const button_start_menu = document.getElementById("button_start_menu");
const button_end_menu = document.getElementById("button_end_menu");

const div_tacos = document.getElementById("div_tacos");
const div_burger = document.getElementById("div_burger");

const div_pizza = document.getElementById("div_pizza");
if (null !== div_tacos && null !== div_burger && div_pizza) {

    div_tacos.style.display = 'none';
    div_burger.style.display = 'block';
    div_pizza.style.display = 'none';

}
if (button_tacos !== null) {
    button_tacos.addEventListener("click", function () {
        div_tacos.style.display = 'block';
        div_burger.style.display = 'none';
        div_pizza.style.display = 'none';
    });
}
if (button_burger !== null) {
    button_burger.addEventListener("click", function () {
        div_burger.style.display = 'block';
        div_tacos.style.display = 'none';
        div_pizza.style.display = 'none';
    });
}
if (button_pizza !== null) {
    button_pizza.addEventListener("click", function () {
        div_pizza.style.display = 'block';
        div_tacos.style.display = 'none';
        div_burger.style.display = 'none';
    });
}

const div_galerie = document.getElementById('galerie');
const div_galerie_item = document.getElementById('galerie-item');

// div_galerie_item.style.display = 'none';
if (div_galerie !== null) {
    var galerie_image = div_galerie.querySelectorAll('img');
    var modalImage = document.querySelector("#myModal img");

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
}

if (document.getElementById("modalClose") !== null) {
    document.getElementById("modalClose").addEventListener("click", function () {
        document.getElementById("myModal").classList.add("hidden");
        document.getElementById("backgroundBlur").classList.add("hidden");

    });
}

// **************************
//****** */ navbar mobile ******
// *************************

if (button_start_menu !== null) {
    button_start_menu.addEventListener('click', () => {
        button_start_menu.style.display = 'none';
        button_end_menu.style.display = 'block';
        menuBlur.style.display = 'block';
    });
}
if (button_end_menu !== null) {
    button_end_menu.addEventListener('click', () => {
        button_start_menu.style.display = 'block';
        button_end_menu.style.display = 'none';
        menuBlur.style.display = 'none';
    });
}