import Loader from "../../../Components/Loader/Loader";
import useAuth from "../../../Hooks/useAuth";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import bannerBg from "../../../assets/menu/banner3.jpg";
import DesertSection from "../DesertSection/DesertSection";
import OfferPage from "../OfferPage/OfferPage";
import PizzaSection from "../PizzaSection/PizzaSection";
import SaladSection from "../SaladSection/SaladSection";
import SoupSection from "../SoupsSection/SoupSection";
const MenuPage = () => {
  const { loading } = useAuth();
  if (loading) {
    console.log("object");
    return <Loader />;
  }
  return (
    <div className="">
      <CommonBanner
        bannerBg={bannerBg}
        heading="The Heart of Bangaliana"
        subHeading="Savor the authentic taste of Bengali cuisine, prepared with love and tradition. Each dish reflects the essence of our heritage, making every meal a celebration of culture."
      ></CommonBanner>
      <OfferPage></OfferPage>
      <DesertSection></DesertSection>
      <PizzaSection></PizzaSection>
      <SoupSection></SoupSection>
      <SaladSection></SaladSection>
    </div>
  );
};

export default MenuPage;
