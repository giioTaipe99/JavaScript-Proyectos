const listaDetoppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso extra';

listaDetoppings.append(toppingNuevo);