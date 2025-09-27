import React from "react";
import Marquee from "react-fast-marquee";

// import your logos
import logo1 from "../../../assets/brands/amazon.png"
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientSlider = () => {
  return (
    <section className="py-10 mt-16">
      <h2 className="text-center text-2xl font-bold mb-10 text-gray-700">We've helped thousands of sales teams</h2>

      <Marquee
        speed={60} // speed of sliding
        gradient={false} // no gradient fade
        pauseOnHover={true} // pause when hover
      >
        {logos.map((logo, index) => (
          <div key={index} className="px-10">
            <img
              src={logo}
              alt={`client-${index}`}
              className=""
            />
          </div>
        ))}
      </Marquee>

     
    </section>
  );
};

export default ClientSlider;
