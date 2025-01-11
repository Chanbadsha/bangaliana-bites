import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const MyCart = () => {
  return (
    <div>
      <div>
        <SectionHeader
          heading="WANNA ADD MORE?"
          subHeading="My Cart"
        ></SectionHeader>
      </div>
      <div className="overflow-x-auto px-12 ">
        <div className="flex justify-between font-bold">
          <h2 className="justify-start">Total Order: </h2>
          <h2>Total Price :</h2>
          <button>Pay</button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
