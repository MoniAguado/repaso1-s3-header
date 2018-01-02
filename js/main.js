
'use strict';

var button = document.querySelector(".button");
var menu = document.querySelector(".menu");

function showMenu() {
	menu.classList.toggle('new-position');
}

button.addEventListener('click', showMenu);
