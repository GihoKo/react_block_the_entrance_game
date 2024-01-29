import * as S from "./PauseButton.style";

export const PauseButton = ({ isPause, onClick = () => {} }) => {
    const type = isPause ? "Play" : "Pause";

    return (
        <>
            <S.Wrapper onClick={onClick}>{type}</S.Wrapper>;
        </>
    );
};
