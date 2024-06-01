import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import useMenu from "../../Hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
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
                  <button className="btn btn-warning">
                    <FaPenToSquare />
                  </button>
                </th>
                <th>
                    <button className="btn btn-error" ><FaTrash /></button>
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
