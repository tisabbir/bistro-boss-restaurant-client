import { Outlet } from "react-router-dom";


const Roots = () => {
    return (
        <div>
            This is root
            <Outlet />
        </div>
    );
};

export default Roots;