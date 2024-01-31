import React from "react";
import * as S from "./Timer.style";
import { useTimer } from "./useTimer.hook";

interface TimerProps {
    isPause: boolean;
}

export const Timer: React.FC<TimerProps> = ({ isPause }) => {
    const { currentTime } = useTimer(isPause);

    return <S.Wrapper>{currentTime}</S.Wrapper>;
};
