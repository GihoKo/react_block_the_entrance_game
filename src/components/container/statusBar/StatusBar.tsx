import { PauseButton } from "../../presenter/PauseButton/PauseButton";
import { usePauseButton } from "./StatusBar.hook";
import { Timer } from "../../presenter/Timer/Timer";
import { ResourceDisplay } from "../../presenter/ResourceDisplay/ResourceDisplay";
import * as S from "./StatusBar.style";
import React from "react";

export const StatusBar: React.FC = () => {
    const { isPause, handlePauseClick } = usePauseButton();

    return (
        <S.Wrapper>
            <PauseButton isPause={isPause} onClick={handlePauseClick} />
            <Timer isPause={isPause} />
            <ResourceDisplay />
        </S.Wrapper>
    );
};
