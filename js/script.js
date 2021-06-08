'use strict';

const cnv = document.getElementById('gameField'),
      ctx = cnv.getContext('2d');

cnv.width   = window.innerWidth;
cnv.height  = window.innerHeight;

import {Game} from "./Game.js";

Game.cnv = cnv;
Game.ctx = ctx;

document.addEventListener('keydown', function (evt) {
    if(!Game.isStart) Game.start();
})

