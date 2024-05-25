import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";


const Roots = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Nav />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Roots;