import * as S from "./ResourceDisplay.style";
import mineralIcon from "../../../assets/img/mineral.png";
import gasIcon from "../../../assets/img/gas.png";

export default function ResourceDisplay({ mineral, gas }) {
    return (
        <S.Wrapper>
            <div>
                <img src={mineralIcon} alt="미네랄 아이콘" /> : {mineral}
            </div>
            <div>
                <img src={gasIcon} alt="가스 아이콘" /> : {gas}
            </div>
        </S.Wrapper>
    );
}
