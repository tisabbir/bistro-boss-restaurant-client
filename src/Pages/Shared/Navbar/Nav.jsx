import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop/salad"}>Our Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/sign"}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div className=" ">
      <div className="navbar fixed z-10 bg-opacity-35 bg-black text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <Link to={'/dashboard/cart'}>
                <button className="btn">
                  <FaCartShopping className="text-xl" />
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </Link>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            </div>
          ) : (
            <Link to={"/login"} className="btn">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
