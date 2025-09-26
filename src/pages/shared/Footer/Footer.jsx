import { FaLinkedin, FaXTwitter, FaFacebook, FaYoutube } from "react-icons/fa6";
import ProFastLogo from "../ProFastLogo/ProFastLogo";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 p-16 rounded-3xl mt-10">
      {/* Logo and description */}
      <div className="text-center">
        <div className="flex justify-center">
          <ProFastLogo></ProFastLogo>
        </div>
        <p className="mt-3 text-sm max-w-xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="my-6 border opacity-50 border-dashed border-teal-600"></div>
      {/* Links */}
      <div>
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <li><a href="#" className="hover:text-lime-400">Services</a></li>
          <li><a href="#" className="hover:text-lime-400">Coverage</a></li>
          <li><a href="#" className="hover:text-lime-400">About Us</a></li>
          <li><a href="#" className="hover:text-lime-400">Pricing</a></li>
          <li><a href="#" className="hover:text-lime-400">Blog</a></li>
          <li><a href="#" className="hover:text-lime-400">Contact</a></li>
        </ul>
      </div>
    <div className="my-6 border opacity-50 border-dashed border-teal-600"></div>
      {/* Social icons */}
      <div className="flex justify-center gap-5 text-2xl">
        <a href="#" className="bg-sky-600 p-2 rounded-full text-white hover:scale-110 transition"><FaLinkedin /></a>
        <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition"><FaXTwitter /></a>
        <a href="#" className="bg-blue-500 p-2 rounded-full text-white hover:scale-110 transition"><FaFacebook /></a>
        <a href="#" className="bg-red-600 p-2 rounded-full text-white hover:scale-110 transition"><FaYoutube /></a>
      </div>
    </footer>
  );
};

export default Footer;
