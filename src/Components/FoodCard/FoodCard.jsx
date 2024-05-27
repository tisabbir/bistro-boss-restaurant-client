import Swal from "sweetalert2";
import useAuth from "../../Pages/Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import useCart from "../../Pages/Hooks/useCart";

const FoodCard = ({item}) => {
  const {name, recipe,  price, _id} = item;
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  //bring the refetch from useCart

  const [,refetch] = useCart();


  const handleAddToCart = () =>{
    if(user && user.email){
      //TODO: sent the user info and food he tried to order to the database and take further actions
      const cartItem = {
        menuId : _id,
        email: user.email,
        name,
        price,
        image : 'https://picsum.photos/id/30/300'
      }

      axiosSecure.post('/carts', cartItem)
      .then(res => {
        if(res.data.insertedId) {
          // show a success toast
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been successfully added to the cart.`,
            showConfirmButton: false,
            timer: 1500
          });
          //TODO: refetch the cart to update the cart items count
          refetch();
        }
      })

      
    } else{
      //TODO: ask user to login. if he confirm sent him to the login page
      Swal.fire({
        title: "You are not logged in.",
        text: "Please log in before adding food to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Take me to the login page"
      }).then((result) => {
        if (result.isConfirmed) {
          //send user to the log in page
          navigate('/login', {state: {from : location}})
        }
      });
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <p className="text-white text-xl bg-slate-800 px-2 rounded-md absolute right-0 mt-4 mr-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          
          <button onClick={handleAddToCart} className="btn btn-outline uppercase border-0 border-b-4 bg-base-300">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
