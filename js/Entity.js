'use strict';

export class Entity
{

    static w = null;
    static h = null;

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    static getRandom(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    }

}