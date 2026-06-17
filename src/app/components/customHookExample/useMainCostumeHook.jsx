'use client'
import React from 'react';

function MainCustomeHook(props) {
    const [count, setCount] = React.useState(0);
    const intervalRef = React.useRef(null);
    React.useEffect(() => {})
    const startIncrementer = () => {
        if (intervalRef.current)return;
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    }
    const stopIncrementer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    return {count, startIncrementer, stopIncrementer}
}

export default MainCustomeHook;