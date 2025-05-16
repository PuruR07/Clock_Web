import React, {useState, useEffect} from 'react';

function DigitalClock() {
    const [Time, setTime] = useState(new Date());
    useEffect(()=>{
    const intervalId = setInterval(()=>{
        setTime(new Date());
    },1000);
    return () => clearInterval(intervalId);
    },[]);


    function formatTime() {
        let hours = Time.getHours();
        let minutes = Time.getMinutes();
        let seconds = Time.getSeconds();
        const meridiem = hours >=12 ? "PM" : "AM";

        hours = hours % 12|| 12;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${hours}:${minutes}:${seconds} ${meridiem}`
    }

    return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <p>Time According to IST</p>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    )
}

export default DigitalClock;