import * as S from "./Timer.style";
import useTimer from "./useTimer.hook";

export default function Timer({ isPause }) {
    const { currentTime } = useTimer({ isPause });

    return <S.Wrapper>{currentTime}</S.Wrapper>;
}
