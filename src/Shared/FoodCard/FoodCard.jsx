import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";

const FoodCard = ({ cardInfo }) => {
  const { image, name, recipe } = cardInfo || [];
  return (
    <div className="card shadow-xl">
      <figure className="w-full">
        <img src={image} alt={name} className="w-full" />
      </figure>
      <div className="card-body  bg-gray-200 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions shadow-2xl ">
          <PrimaryBtn title="Add To Cart"></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
