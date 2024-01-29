import { PauseButton } from "../../presenter/PauseButton/PauseButton";
import { usePauseButton } from "./StatusBar.hook";
import Timer from "../../presenter/Timer/Timer";
import ResourceDisplay from "../../presenter/ResourceDisplay/ResourceDisplay";
import * as S from "./StatusBar.style";

export default function StatusBar({ mineral, gas }) {
    const { isPause, handlePauseClick } = usePauseButton();

    return (
        <S.Wrapper>
            <PauseButton isPause={isPause} onClick={handlePauseClick} />
            <Timer isPause={isPause} />
            <ResourceDisplay mineral={mineral} gas={gas} />
        </S.Wrapper>
    );
}
