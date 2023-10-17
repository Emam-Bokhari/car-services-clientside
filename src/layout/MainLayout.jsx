import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;