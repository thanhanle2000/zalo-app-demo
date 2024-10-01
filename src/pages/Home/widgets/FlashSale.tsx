import React, { useState, useEffect } from "react";

interface CountdownProps {
    hours: number;
    minutes: number;
    seconds: number;
}

const FlashSaleCountdown: React.FC<CountdownProps> = ({
    hours,
    minutes,
    seconds,
}) => {
    // STATE
    const [time, setTime] = useState({ hours, minutes, seconds });

    useEffect(() => {
        const timer = setInterval(() => {
            if (time.seconds > 0) {
                setTime((prevState) => ({ ...prevState, seconds: prevState.seconds - 1 }));
            } else if (time.minutes > 0) {
                setTime((prevState) => ({
                    ...prevState,
                    minutes: prevState.minutes - 1,
                    seconds: 59,
                }));
            } else if (time.hours > 0) {
                setTime((prevState) => ({
                    ...prevState,
                    hours: prevState.hours - 1,
                    minutes: 59,
                    seconds: 59,
                }));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    // FORMAT TIME
    const formatTime = (unit: number) => (unit < 10 ? `0${unit}` : unit);

    return (
        <div className="flex items-center gap-2">
            <span className="text-gray-600">Đóng phiên</span>
            <div className="flex items-center gap-[4px]">
                <span className="bg-[#EFAE09] text-white p-1 rounded">
                    {formatTime(time.hours)}
                </span>
                <span>:</span>
                <span className="bg-[#EFAE09] text-white p-1 rounded">
                    {formatTime(time.minutes)}
                </span>
                <span>:</span>
                <span className="bg-[#EFAE09] text-white p-1 rounded">
                    {formatTime(time.seconds)}
                </span>
            </div>
        </div>
    );
};

export default FlashSaleCountdown;
