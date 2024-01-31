import * as S from "./CommandCenter.style";
import commandCenterImg from "../../../assets/img/command_center.png";

export default function CommandCenter() {
    return (
        <S.Wrapper>
            <img src={commandCenterImg} alt="커맨트 센터 이미지" />
        </S.Wrapper>
    );
}
