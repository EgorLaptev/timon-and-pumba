'use strict';

import {Game} from "./Game.js";

export class Control
{

    static inJump = false;
    static pressedKeys = [];

    static define() {

        /* Move & Jump */
        document.addEventListener('keydown', evt => {
            if ([39, 38, 37].includes(evt.keyCode)) Control.pressedKeys[evt.keyCode] = true;
        });

        document.addEventListener('keyup', evt => {
            if ([39, 38, 37].includes(evt.keyCode)) Control.pressedKeys[evt.keyCode] = false;
        });

        /* Pause */
        document.addEventListener('keydown', evt => {
            if(evt.keyCode == 27) Game.pause(); // Esc
        });

    }


}