import React, { useState, useEffect } from 'react';
import ProjectLogo from './ProjectLogo.png';
import './CountdownTimer.css'; 

const CountdownTimer = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);

    const calculateTimeLeft = () => {
        let difference = +launchDate - +new Date();

        if (difference > 0) {
            const seconds = Math.floor((difference / 1000) % 60);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));

            return {
                days,
                hours,
                minutes,
                seconds
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-container">
            <div className="image">
                <img src={ProjectLogo} alt="Logo" />
            </div>
            <h3>Lost in the cosmos</h3>
            <h1 className="countdown-heading">Coming soon in</h1>
            <div className="countdown">
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.days}</span>
                    <span className="countdown-label">days</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.hours}</span>
                    <span className="countdown-label">hours</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.minutes}</span>
                    <span className="countdown-label">minutes</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.seconds}</span>
                    <span className="countdown-label">seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
