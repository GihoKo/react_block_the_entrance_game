import * as S from "./Cell.style";
import enemySpawnCellBgImg from "../../../assets/images/entrance.png";
import React from "react";

interface CellProps {
    cellType: "enemySpawnCell" | "enemyPathCell" | "towerPlacementCell";
}

interface CellStyle {
    enemySpawnCell: {
        backgroundColor: string;
        backgroundImage: string;
    };
    enemyPathCell: {
        backgroundColor: string;
    };
    towerPlacementCell: {
        backgroundColor: string;
    };
}

export const Cell: React.FC<CellProps> = ({ cellType }) => {
    const cells: CellStyle = {
        enemySpawnCell: {
            backgroundColor: "var(--black-4)",
            backgroundImage: `url(${enemySpawnCellBgImg})`,
        },
        enemyPathCell: { backgroundColor: "var(--black-4)" },
        towerPlacementCell: { backgroundColor: "var(--black-1)" },
    };

    return (
        <S.Wrapper
            backgroundColor={cells[cellType].backgroundColor}
            backgroundImage={cells[cellType].backgroundImage}
        />
    );
};
