import { useEffect, useState } from "react";

export const useTimer = (isPause: boolean) => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isPause === false) {
            timer = setInterval(() => {
                setCurrentTime((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            if (timer !== null) {
                clearInterval(timer);
            }
        };
    }, [isPause]);

    return { currentTime };
};
