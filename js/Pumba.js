'use strict';

import {Entity} from "./Entity.js";

export class Pumba extends Entity
{

    static x = null;
    static y = null;

    static w = 200;
    static h = 200;

    static speed = 5;
    static jumpHeight = 100; // In pixels

    static health = 100;
    static points = 0;
    static name   = '';

    static skin = '../Media/Пумба/Pumbaa04.png';

}