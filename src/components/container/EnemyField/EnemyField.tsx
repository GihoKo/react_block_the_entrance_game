import React from "react";
import { enemyFieldCells } from "../../constants/enemyFieldCells";
import { Cell } from "../../presenter/Cell/Cell";
import styled from "styled-components";

export const EnemyField: React.FC<{}> = () => {
    return (
        <Container>
            {enemyFieldCells.flat(2).map((cell) => {
                if (cell.type === "enemySpawnCell") {
                    return <Cell cellType={"enemySpawnCell"} />;
                }
                if (cell.type === "enemyPathCell") {
                    return <Cell cellType={"enemyPathCell"} />;
                }
                if (cell.type === "towerPlacementCell") {
                    return <Cell cellType={"towerPlacementCell"} />;
                }
            })}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 70px);
    grid-template-rows: repeat(7, 70px);
`;
