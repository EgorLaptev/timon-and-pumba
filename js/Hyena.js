'use strict';

import {Entity} from "./Entity.js";

export class Hyena extends Entity
{

    static list = []; // All hyenas

    static w = 175;
    static h = 150;

    static damage = 30; // -30hp

    static skin = '../Media/Гиена/hyena_PNG52.png';

    constructor(x, y, w, h) {
        super(x, y, w, h);
        Hyena.list.push(this);
    }

    static generate(minPosX, minPosY, maxPosX, maxPosY)
    {
        let x = Entity.getRandom(minPosX, maxPosX);
        let y = Entity.getRandom(minPosY, maxPosY);

        return new Hyena(x, y, Hyena.w, Hyena.h);
    }

    static render(cnv)
    {

        let ctx = cnv.getContext('2d');

        let hyenaImage = new Image();
        hyenaImage.src = Hyena.skin;
        Hyena.list.forEach(hyena => {
            ctx.drawImage(hyenaImage, hyena.x, hyena.y, Hyena.w, Hyena.h);
        });

    }

}