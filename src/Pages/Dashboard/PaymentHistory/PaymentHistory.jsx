import { useQuery } from "@tanstack/react-query";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div>
      <SectionTitles
        headings={"Payment History"}
        subheadings={"All your payments are here."}
      />
      <h1 className="text-3xl text-center">
        {" "}
        Payment History : {payments?.length}
      </h1>

      <div>
        <div className="overflow-x-auto mt-12">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.transactionId}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    {item.status}
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

export default PaymentHistory;
