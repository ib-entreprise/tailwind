var button_tacos = document.getElementById("button_tacos");
var button_burger = document.getElementById("button_burger");
var button_pizza = document.getElementById("button_pizza");

var div_tacos = document.getElementById("div_tacos");
var div_burger = document.getElementById("div_burger");
var div_pizza = document.getElementById("div_pizza");

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
