import bannerBg from "../../../assets/contact/banner.jpg";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import ContactForm from "../ContactForm/ContactForm";
import LocationSection from "../LocationSection/LocationSection";

const ContactPage = () => {
  return (
    <div>
      <CommonBanner
        bannerBg={bannerBg}
        heading="Connect with Bangaliana Bites"
        subHeading="Have a question or need assistance? We’re just a message away! Contact us for reservations, inquiries, or any support you need to make your experience delightful."
      ></CommonBanner>
      <LocationSection></LocationSection>
      <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
