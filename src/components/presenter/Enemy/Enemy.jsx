import * as S from "./Enemy.style";
import chimpanzeeImg from "../../../assets/img/chimpanzee.png";
import orangutanImg from "../../../assets/img/orangutan.png";
import gorillaImg from "../../../assets/img/gorilla.png";

export default function Enemy({ type }) {
    const enemyTypes = {
        chimpanzee: chimpanzeeImg,
        orangutan: orangutanImg,
        gorilla: gorillaImg,
    };

    return (
        <S.Wrapper>
            <img src={enemyTypes[type]} alt="적 이미지" />
        </S.Wrapper>
    );
}
