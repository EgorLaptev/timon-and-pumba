'use strict';

export class Timer {

    static timer;
    static time = 0;
    static acceleration = 1;

    static start(startTime = 0)
    {
        Timer.time = startTime;
        Timer.timer = setInterval(() => Timer.time++, 1000 / Timer.acceleration);
    }

    static pause()
    {
        clearInterval(Timer.timer);
    }

}