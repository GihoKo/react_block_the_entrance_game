import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MainPage.style";

export default function MainPage() {
    const navigate = useNavigate();
    const onStartButtonClick = () => {
        navigate("./play");
    };
    return (
        <S.Wrapper>
            <S.StartButton onClick={onStartButtonClick}>Start</S.StartButton>
        </S.Wrapper>
    );
}
