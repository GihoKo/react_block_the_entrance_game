import React from "react";
import { StatusBar } from "../components/container/statusBar/StatusBar";
import { EnemyField } from "../components/container/EnemyField/EnemyField";

export default function PlayPage() {
    return (
        <>
            <StatusBar />
            <EnemyField />
        </>
    );
}
