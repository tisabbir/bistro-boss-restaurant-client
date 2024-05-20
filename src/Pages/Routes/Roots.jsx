import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";


const Roots = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Roots;