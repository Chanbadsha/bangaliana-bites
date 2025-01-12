import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ cardInfo }) => {
  const { image, _id, name, recipe } = cardInfo || [];
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const { id, ...cartData } = cardInfo || {};
  const addToCart = () => {
    const productInfo = {
      userName: user.displayName,
      userEmail: user.email,
      productId: _id,
      cartData,
    };
    console.log(productInfo);
    axiosSecure.post("/carts", productInfo).then((result) => {
      console.log(result.data);
    });
  };
  return (
    <div className="card shadow-xl">
      <figure className="w-full">
        <img src={image} alt={name} className="w-full" />
      </figure>
      <div className="card-body  px-0 bg-gray-200 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions shadow-2xl ">
          <button
            onClick={addToCart}
            className={` btn btn-outline border-b-2 border-t-0 border-x-0  `}
          >
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
