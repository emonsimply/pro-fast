import { FaTruckPickup, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaTruckPickup className="text-4xl" />,
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    id: 2,
    icon: <FaMoneyBillWave className="text-4xl" />,
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    id: 3,
    icon: <FaWarehouse className="text-4xl" />,
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    id: 4,
    icon: <FaBuilding className="text-4xl" />,
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div>
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          How it Works
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => (
            <div
              key={step.id}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
