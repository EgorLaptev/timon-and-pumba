'use strict';

import {Game} from "./Game.js";

export class Panel
{

    static color        = 'green';
    static bg           = '#222';
    static fontSize     = '20px';
    static fontFamily   = 'Arial';
    static fontStyle    = 'normal'

    static render(name = null, points = 0, health = 100, time = 0)
    {

        /* Panel background */
        Game.ctx.fillStyle = Panel.bg;
        Game.ctx.fillRect(0, Game.cnv.height-50, Game.cnv.width, 50);

        /* Panel text */
        Game.ctx.fillStyle = Panel.color;
        Game.ctx.font = `${Panel.fontStyle} ${Panel.fontSize} ${Panel.fontFamily}` ;

        /* Name */
        Game.ctx.fillText(`Name: ${name}`, 75, Game.cnv.height-15);

        /* Points */
        Game.ctx.fillText(`Points: ${points}`, Game.cnv.width-400, Game.cnv.height-15);

        /* Health */
        Game.ctx.fillText(`Health: ${health}`, Game.cnv.width-300, Game.cnv.height-15);

        /* Time */
        let sec = time % 60,
            min = Math.floor(time/60);

        if(sec < 10) sec = `0${sec}`;
        if(min < 10) min = `0${min}`;

        Game.ctx.fillText(` Time : ${min}:${sec}`, Game.cnv.width-150, Game.cnv.height-15);

    }

}