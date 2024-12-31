import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import bannerBg from "../../../assets/menu/banner3.jpg";
import OfferPage from "../OfferPage/OfferPage";
const MenuPage = () => {
  return (
    <div>
      <CommonBanner
        bannerBg={bannerBg}
        heading="The Heart of Bangaliana"
        subHeading="Savor the authentic taste of Bengali cuisine, prepared with love and tradition. Each dish reflects the essence of our heritage, making every meal a celebration of culture."
      ></CommonBanner>
      <OfferPage></OfferPage>
    </div>
  );
};

export default MenuPage;
