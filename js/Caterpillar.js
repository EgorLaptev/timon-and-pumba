'use strict';

import {Entity} from "./Entity.js";

export class Caterpillar extends Entity
{

    static list = []; // All caterpillars

    static w = 50;
    static h = 50;

    static regen = 5; // +5hp

    static skin = '../Media/Гусеницы/56745fe7c68a8151b696a185.png';

    constructor(x, y, w, h) {
        super(x, y, w, h);
        Caterpillar.list.push(this);
    }

    static generate(minPosX, minPosY, maxPosX, maxPosY)
    {
        let x = Entity.getRandom(minPosX, maxPosX);
        let y = Entity.getRandom(minPosY, maxPosY);

        return new Caterpillar(x, y, Caterpillar.w, Caterpillar.h);
    }

    static render(cnv)
    {

        let ctx = cnv.getContext('2d');

        let caterpillarImage = new Image();
        caterpillarImage.src = Caterpillar.skin;
        Caterpillar.list.forEach(caterpillar => {
            ctx.drawImage(caterpillarImage, caterpillar.x, caterpillar.y, Caterpillar.w, Caterpillar.h);
        });

    }

}