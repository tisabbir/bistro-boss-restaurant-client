import { FaTrash } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);


  return (
    <div className="mt-12">
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total Price : ${totalPrice}</h2>
        <button className="btn btn-secondary">Pay</button>
      </div>

      <div>
        <div className="overflow-x-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                    <td>
                        {index + 1}
                    </td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">
                        Customer Email: {item.email}
                      </div>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-error">
                        <FaTrash/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
