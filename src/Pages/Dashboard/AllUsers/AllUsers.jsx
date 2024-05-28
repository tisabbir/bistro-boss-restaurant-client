import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin =(user) => {
    Swal.fire({
        title: `Are you sure to make ${user.name} an Admin?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Him Admin!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${user._id}`)
          .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    title: "Admin Made!",
                    text: `${user.name} is an Admin Now!`,
                    icon: "success"
                  });
            }
          })
        }
      });
  }

  const handleDeleteUser = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
          })
        }
      });
    //
  }
  return (
    <div className="mt-12">
      <div className="flex justify-evenly">
        <h2 className="text-4xl">All Users</h2>
        <h2 className="text-4xl">Total Users : {users.length}</h2>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((item, index) => (
                <tr key={item._id}>
                  <th> {index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <th>
                    { item?.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(item)} className="btn btn-warning">
                      <FaUsers />
                    </button>}
                  </th>
                  <th>
                    <button onClick={()=>handleDeleteUser(item._id)} className="btn btn-error">
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
