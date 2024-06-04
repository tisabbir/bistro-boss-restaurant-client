import { useQuery } from "@tanstack/react-query";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data : payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitles  headings={'Payment History'} subheadings={'All your payments are here.'}/> 
            <h1>{payments?.length}</h1>
        </div>
    );
};

export default PaymentHistory;