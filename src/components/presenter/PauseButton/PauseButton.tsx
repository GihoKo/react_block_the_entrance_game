import React from "react";
import * as S from "./PauseButton.style";

interface PauseButtonProps {
    isPause: boolean;
    onClick?: () => void;
}

export const PauseButton: React.FC<PauseButtonProps> = ({
    isPause,
    onClick = () => {},
}) => {
    const type = isPause ? "Play" : "Pause";

    return (
        <>
            <S.Wrapper onClick={onClick}>{type}</S.Wrapper>;
        </>
    );
};
