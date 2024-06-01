import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import useMenu from "../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    if(loading){
        return 'loading...'
    }

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }

            
            }
          });
    }
  return (
    <div>
      <SectionTitles headings={"Manage all items"} subheadings="Hurry Up" />

      <div className="p-10 mt-6">
        <h1 className="text-2xl mb-4">Total Items: {menu.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                menu.map((item, index)=><tr key={index}>
                <th>
                 {index + 1}
                </th>
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
                  {item.name}
                </td>
                <td>{item.price}</td>
                <th>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button className="btn btn-warning">
                    <FaPenToSquare />
                  </button>
                  </Link>
                </th>
                <th>
                    <button onClick={()=>handleDelete(item)} className="btn btn-error" ><FaTrash /></button>
                </th>
              </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
