import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";


const Roots = () => {
    return (
        <div>
            This is root
            <Outlet />
            <Footer />
        </div>
    );
};

export default Roots;