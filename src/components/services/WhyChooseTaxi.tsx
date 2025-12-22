import { FaUserShield, FaCarAlt, FaTags, FaHeadset, FaMapMarkedAlt, FaSmileBeam } from "react-icons/fa";
import WhyChoose from "../common/WhyChoose";

const points = [
  {
    title: "Verified Drivers",
    desc: "Experienced drivers ensuring your safety on every route.",
    icon: <FaUserShield />
  },
  {
    title: "Premium Fleet",
    desc: "Clean, sanitized, and well-maintained vehicles for maximum comfort.",
    icon: <FaCarAlt />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. What you see is what you pay.",
    icon: <FaTags />
  },
  {
    title: "24/7 Support",
    desc: "Round the clock customer support for any assistance during your trip.",
    icon: <FaHeadset />
  },
  {
    title: "Flexible Routes",
    desc: "Customizable pickup and drop locations to suit your schedule.",
    icon: <FaMapMarkedAlt />
  },
  {
    title: "Happy Customers",
    desc: "Trusted by 1000+ satisfied pilgrims and travelers.",
    icon: <FaSmileBeam />
  },
];

const WhyChooseTaxi = () => {
  return (
    <WhyChoose
      title="Why Choose Our Taxi Services"
      subtitle="We go the extra mile to ensure your journey is not just a travel, but a memorable experience."
      items={points}
    />
  );
};

export default WhyChooseTaxi;
