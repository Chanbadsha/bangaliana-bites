import Lottie from "lottie-react";
import loader from "../../assets/Lottie/foodLoader2.json";
const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className=" w-1/4 md:w-1/6">
        {" "}
        <Lottie animationData={loader}></Lottie>
      </div>
    </div>
  );
};

export default Loader;
