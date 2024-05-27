import { FaBook, FaCalendar, FaCartShopping, FaHouse, FaMoneyBill, FaStar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHouse />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <FaMoneyBill />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaBook />
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
