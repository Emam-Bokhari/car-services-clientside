import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddServices from "../pages/AddServices/AddServices";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader:()=>fetch("http://localhost:3000/service"),
                element: <Home />
            },
            {
                path: "/addServices",
                element: <AddServices />
            }
        ]
    }
])
export default Router