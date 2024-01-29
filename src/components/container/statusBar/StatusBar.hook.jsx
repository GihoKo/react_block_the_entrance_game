import { useState } from "react";

export const usePauseButton = () => {
    // 초기값은 게임이 시작되지 않은 상태다
    const [isPause, setIsPause] = useState(true);

    const handlePauseClick = () => {
        setIsPause(!isPause);
    };

    return { isPause, handlePauseClick };
};
