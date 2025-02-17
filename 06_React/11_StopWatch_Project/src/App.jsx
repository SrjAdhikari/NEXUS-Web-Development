import React, { useState, useRef } from 'react'

const App = () => {

    // State to keep track of elapsed time in seconds
    const [time, setTime] = useState(0);

    // State to track whether the stopwatch is running
    const [isRunning, setIsRunning] = useState(false);

    // useRef to store the interval ID to clear it when needed
    const intervalRef = useRef(null);

    // Function to format time from seconds to HH:MM:SS format
    const formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    }

    // Function to start the stopwatch and update the time
    const startTimer = () => {
        if(isRunning === false) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    };

    // Function to stop the stopwatch
    const stopTimer = () => {
        if(isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    }

    // Function to reset the stopwatch
    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    }


    return (
        <>
            <div className='container'>
                <h1>{formatTime(time)}</h1>
                <div className="btn-container">
                    <button className="start-btn" onClick={startTimer}>Start</button>
                    <button className="stop-btn" onClick={stopTimer}>Stop</button>
                    <button className="reset-btn" onClick={resetTimer}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default App