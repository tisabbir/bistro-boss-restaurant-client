import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const axiosSecure = useAxiosSecure();
    //TODO: use tan stack query
    const {data : cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })

    return [cart]
    
};

export default useCart;