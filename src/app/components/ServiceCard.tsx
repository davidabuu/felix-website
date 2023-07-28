
import Image from "next/image";

// export default ServiceCard;
import React from "react";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative  h-fit w-full bg-white shadow-lg rounded-lg p-4 overflow-hidden">
     <Image width={400} height={300} src={imageUrl} alt={title} className="w-full h-50 object-contain mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="overlay">
        <button className="button">Check Out</button>
      </div>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .button {
          background-color: #1E40AF;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .button:hover {
          transform: scale(1.1);
        }

        .relative:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;

