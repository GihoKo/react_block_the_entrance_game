import { useEffect, useState } from "react";

export default function useTimer({ isPause }) {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        let timer = null;
        // isPause가 false면 타이머를 시작한다
        if (isPause === false) {
            timer = setInterval(() => {
                setCurrentTime((prev) => prev + 1);
            }, 1000);
        }
        // isPause가 true면 타이머를 멈춘다
        return () => {
            clearInterval(timer);
        };
    }, [isPause]);

    return { currentTime };
}
