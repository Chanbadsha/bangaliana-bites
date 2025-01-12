import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `cart?email=${user.email}`,
        user.email
      );

      return data;
    },
  });
  refetch();
  return [cart];
};

export default useCart;
