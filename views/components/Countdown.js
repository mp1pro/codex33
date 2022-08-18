import React from 'react';

import {CountdownCircleTimer} from "react-countdown-circle-timer";

//for countdown timer
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const stratTime = Date.now() / 1000;
//countdown to this date
const endTime = 1664668705;
const remainingTime = endTime - stratTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

//end timer

const vars = {
    isPlaying: true,
    strokeWidth: 12,
    colors: '#F00',
    trailColor: '#000'
}

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

function Countdown(){
    return(
        <div className='countdown'>
            <CountdownCircleTimer
                {...vars}
                duration={daysDuration}
                onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                initialRemainingTime={remainingTime}
                size={innerWidth/4}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                                    {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                                </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...vars}
                duration={daySeconds}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
                size={innerWidth/4}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                                    {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                                </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...vars}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
                size={innerWidth/4}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                                    {renderTime("mins", getTimeMinutes(hourSeconds - elapsedTime))}
                                </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...vars}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
                size={innerWidth/4}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                                    {renderTime("secs", getTimeSeconds(elapsedTime))}
                                </span>
                )}
            </CountdownCircleTimer>
        </div>
    );
}

export default Countdown;
