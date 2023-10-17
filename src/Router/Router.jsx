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
                loader:()=>fetch("https://car-service-serverside-itmy8fuwh-moshfiqur-rahmans-projects.vercel.app/service"),
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