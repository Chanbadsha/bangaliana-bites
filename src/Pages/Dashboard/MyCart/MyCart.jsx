import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

import useCart from "../../../Hooks/useCart";

import { MdDeleteForever } from "react-icons/md";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <div>
      <div>
        <SectionHeader
          heading="WANNA ADD MORE?"
          subHeading="My Cart"
        ></SectionHeader>
      </div>
      <div className="overflow-x-auto px-12  ">
        <div className="flex justify-between font-bold py-6">
          <h2 className="justify-start">Total Order: {cart.length} </h2>
          <h2>Total Price :</h2>
          <button>Pay</button>
        </div>
        <table className="table border">
          {/* head */}
          <thead className="">
            <tr className="border">
              <th className="text-xl font-bold">No.</th>
              <th className="text-xl font-bold">Image</th>
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Price</th>
              <th className="text-xl text-center font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((cartInfo, index) => (
              <tr className="">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-14 w-14">
                        <img
                          src={cartInfo.cartData?.image}
                          alt={cartInfo.cartData?.name}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold text-xl">
                      {cartInfo.cartData?.name}
                    </div>
                  </div>
                </td>
                <td>${cartInfo.cartData?.price}</td>
                <th className="text-center">
                  <button className="btn p-0 btn-outline border-none rounded-full w-8 h-8 btn-xs">
                    <MdDeleteForever className="w-full  text-2xl text-red-500 hover:text-white "></MdDeleteForever>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
