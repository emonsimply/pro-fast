import { FaMapMarkedAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";
import bImg1 from '../../../assets/live-tracking.png'
import bImg2 from '../../../assets/tiny-deliveryman.png'
import bImg3 from '../../../assets/safe-delivery.png'

const benefits = [
  {
    id: 1,
    img: bImg1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    img: bImg2,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    img: bImg3,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Benefits = () => {
  return (
    <section className=" py-12 px-6 md:px-12">
      <div className="border-t-2 border-dashed mb-16  opacity-40"></div>
      <div className="space-y-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center gap-10 p-6 rounded-2xl shadow-sm bg-gray-100"
          >
            {/* Icon / Illustration */}
            <div className="w-40 h-40 flex items-center justify-center">
              <img className="" src={item.img} alt={item.title} />
            </div>

            {/* Divider */}
            <div className="hidden md:block border-l-2 border-dashed border-gray-300 h-26"></div>

            {/* Text */}
            <div className="max-w-[750px]">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>

            
          </div>
          
        ))}
      </div>
      <div className="border-t-2 border-dashed mt-16  opacity-40"></div>
    </section>
  );
};

export default Benefits;
