'use strict';

import {Game} from "./Game.js";
import {Pumba} from "./Pumba.js";

let welcomeForm     = document.getElementById('welcomeForm'),
    nameInput       = document.getElementById('name'),
    setName         = document.getElementById('setName'),
    welcomeScreen   = document.getElementById('welcomeScreen');

nameInput.addEventListener('input', evt => {
    setName.disabled = !nameInput.value.trim();
});

welcomeForm.addEventListener('submit', evt => {

    evt.preventDefault();

    if(!!nameInput.value.trim()) {
        welcomeScreen.style.display = 'none'; // Hide welcome screen
        Pumba.name = nameInput.value.trim(); // Set player's name
        Game.start(); // Start game
    }

});