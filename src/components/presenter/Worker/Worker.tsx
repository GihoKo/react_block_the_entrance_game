import * as S from "./Worker.style";
import workerImg from "../../../assets/img/worker.png";
import workerHavingGas from "../../../assets/img/worker_gas.png";
import workerHavingMineral from "../../../assets/img/worker_mineral.png";
import workerWorking from "../../../assets/img/worker_working.png";
import React from "react";

interface WorkerProps {
    type:
        | "worker"
        | "workerHavingGas"
        | "workerHavingMineral"
        | "workerWorking";
}

export const Worker: React.FC<WorkerProps> = ({ type }) => {
    const workers = {
        worker: workerImg,
        workerHavingGas: workerHavingGas,
        workerHavingMineral: workerHavingMineral,
        workerWorking: workerWorking,
    };

    return (
        <S.Wrapper>
            <img src={workers[type]} alt="일꾼 이미지" />
        </S.Wrapper>
    );
};
