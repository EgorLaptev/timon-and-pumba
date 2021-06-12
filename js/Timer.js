'use strict';

export class Timer {

    static _timer;
    static time = 0;
    static acceleration = 1;

    static start(startTime = 0)
    {
        Timer.time = startTime;
        Timer._timer = setInterval(() => Timer.time++, 1000 / Timer.acceleration);
    }

    static pause()
    {
        clearInterval(Timer._timer);
    }

}