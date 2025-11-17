import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FiSearch } from "react-icons/fi";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
    if(district){
      const coord = [district.latitude, district.longitude];
      // console.log(district, coord)
      mapRef.current.flyTo(coord, 14)
    }
  };

  return (
    <div className="bg-white p-20 rounded-3xl">
      <div>
        <h2 className="text-4xl font-bold">We are available in 64 districts</h2>
        
        <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full md:w-1/2 my-10">
          
          <FiSearch className="text-gray-500 ml-3 text-xl" />
          <input
            name="location"
            type="text"
            placeholder="Search here"
            className="flex-1 bg-transparent outline-none px-3 text-gray-700"
          />

          <button className="bg-primary font-semibold px-6 py-2 rounded-full">
            Search
          </button>
        </form>
        <hr className="opacity-10"/>
        <p className="my-10 text-2xl font-semibold">We deliver almost all over Bangladesh</p>
      </div>
      <div className="w-full [400px] mt-10">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[400px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <string>{center.district}</string>
                <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
