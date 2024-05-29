import { FaBook, FaBurger, FaCalendar, FaCartShopping, FaHouse, FaList, FaMoneyBill, FaPeopleGroup, FaShop, FaStar, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Pages/Hooks/useAdmin";

const Dashboard = () => {

  //TODO: get the isAdmin value from database
  const [isAdmin] = useAdmin();  
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to={"/dashboard/adminHome"}>
              <FaHouse />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/addItems"}>
              <FaUtensils />
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manageItems"}>
              <FaList/>
              Manage Items
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/dashboard/manageBookings"}>
              <FaBook />
              Manage Booking
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/users"}>
              <FaPeopleGroup />
              All Users
            </NavLink>
          </li>
            </> : 
            <>
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
            </>
          }

          {/* Shared components */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHouse />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaBurger />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/shop/salad"}>
              <FaShop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaPeopleGroup />
              Contact
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
