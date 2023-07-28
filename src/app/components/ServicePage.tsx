import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <h1 className="text-4xl font-bold mb-6">Services</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ServiceCard
          title="Furnitures"
          imageUrl="/pic2.jpg" // Replace with your image URL
        />
        <ServiceCard
          title="Civil Constructions"
          imageUrl="/bore.webp" // Replace with your image URL
        />
        <ServiceCard
          title="Photography"
          imageUrl="/pic3.jpg" // Replace with your image URL
        />
      </div>
    </div>
  );
};

export default ServicesPage;
