import React from "react";
import { useState } from "react";
import { StatusBar } from "../components/container/statusBar/StatusBar";

export default function PlayPage() {
    const [mineral, setMineral] = useState<number>(150);
    const [gas, setGas] = useState<number>(100);

    const handleMineralChange = (value: number) => {
        setMineral((prev) => prev + value);
    };

    const handleGasChange = (value: number) => {
        setGas((prev) => prev + value);
    };

    return (
        <>
            <StatusBar mineral={mineral} gas={gas} />
        </>
    );
}
