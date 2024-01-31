import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PlayPage from "./pages/PlayPage";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "play",
                element: <PlayPage />,
            },
        ],
    },
]);

export default router;
