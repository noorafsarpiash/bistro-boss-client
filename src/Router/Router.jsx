import {
    createBrowserRouter,

} from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);