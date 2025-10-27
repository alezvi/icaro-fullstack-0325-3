import { useState } from 'react';

export default function useGame() {
    const emojis = [
        { value : "A", visible : false, matched : false },
        { value : "B", visible : false, matched : false },
        { value : "C", visible : false, matched : false },
        { value : "D", visible : false, matched : false },
        { value : "E", visible : false, matched : false },
        { value : "F", visible : false, matched : false },
        { value : "G", visible : false, matched : false },
        { value : "H", visible : false, matched : false },
    ];

    const items = [...emojis, ...emojis];

    const [started, setStarted] = useState(false);

    const [score, setScore] = useState(0);

    const [seconds, setSeconds] = useState(60);

    function handleStart() {
        setStarted(true);

        setInterval(() => {
            setSeconds(seconds-1);
        }, 1000)
    }

    return { items, started, score, seconds, handleStart }
}