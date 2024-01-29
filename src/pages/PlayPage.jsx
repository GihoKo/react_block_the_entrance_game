import { useState } from "react";
import StatusBar from "../components/container/statusBar/StatusBar";

export default function PlayPage() {
    const [mineral, setMineral] = useState(150);
    const [gas, setGas] = useState(100);

    const handleMineralChange = (value) => {
        setMineral((prev) => prev + value);
    };

    const handleGasChange = (value) => {
        setGas((prev) => prev + value);
    };

    return (
        <>
            <StatusBar mineral={mineral} gas={gas} />
        </>
    );
}
