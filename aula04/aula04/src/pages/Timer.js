import { useEffect, useState } from "react";

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setTimer(prevSeconds => prevSeconds + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const pauseClick = () => {
        setIsPaused(!isPaused);
    };

   

    return (
        <div>
            <div>{timer} segundos</div>
            <button onClick={pauseClick}>{isPaused? "Continuar" : "Pausar"}</button>

        </div>
    );
}

export default Timer;