import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { refetch, data: cart = [], isLoading, error } = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !!user?.email, // user email না থাকলে query call হবে না
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        },
    });

    return [cart, refetch, isLoading, error];
};

export default useCart;
