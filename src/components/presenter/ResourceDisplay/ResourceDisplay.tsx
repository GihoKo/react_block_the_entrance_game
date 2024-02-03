import * as S from "./ResourceDisplay.style";
import mineralIcon from "../../../assets/images/mineral.png";
import gasIcon from "../../../assets/images/gas.png";
import React from "react";
import { useRecoilState } from "recoil";
import { gasState, mineralState } from "../../../atom";

export const ResourceDisplay: React.FC = () => {
    const [mineral, setMineral] = useRecoilState(mineralState);
    const [gas, setGas] = useRecoilState(gasState);

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
};
