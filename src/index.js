import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    // Provider로 store를 전달하여 전역에서 store를 사용할 수 있도록 함
    <React.StrictMode>
        <RecoilRoot>
            <RouterProvider router={router} />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
