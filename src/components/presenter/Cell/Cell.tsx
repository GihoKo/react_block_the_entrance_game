import * as S from "./Cell.style";
import enemySpawnCellBgImg from "../../../assets/img/entrance.png";
import React from "react";

interface CellProps {
    cellType: "enemySpawnCell" | "EnemyPathCell" | "TowerPlacementCell";
}

export const Cell: React.FC<CellProps> = ({ cellType }) => {
    const cells = {
        enemySpawnCell: {
            backgroundColor: "var(--black-4)",
            backgroundImage: `url(${enemySpawnCellBgImg})`,
        },
        EnemyPathCell: { backgroundColor: "var(--black-4)" },
        TowerPlacementCell: { backgroundColor: "var(--black-1)" },
    };

    return (
        <S.Wrapper
            backgroundColor={cells[cellType].backgroundColor}
            backgroundImage={cells[cellType].backgroundImage || ""}
        />
    );
};
