import React from "react";
import { IMG_CDN_URL } from "./Config";
import offerImg from "../utils/assets/offer.png"
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
  slaString,
  avgRating,
  aggregatedDiscountInfo,
}) => {
  const cuisineIcons = {
    Italian: (
      <svg
        className="w-6 h-6 text-red-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 20H6l-3-6V4h12v10l-3 6h-3" />
        <path d="M9 16h6" />
        <path d="M8 12h8" />
        <path d="M7 8h10" />
      </svg>
    ),
    // Add more cuisine icons as needed
    // Indian: (<svg ... />),
    // Mexican: (<svg ... />),
    // Chinese: (<svg ... />),
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 hover:z-10 transform transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-56 object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
      />
      <div className="mt-4 ">
        <h3 className="text-xl font-semibold pl-2">{name}</h3>
        <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden pl-2">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-600 text-sm pl-2 ">{lastMileTravelString}</p>
        <p className="text-gray-600 text-sm pl-2">{slaString}</p>
        <p className="text-gray-600 text-sm pl-2">
          {avgRating === "--" ? "4.2" : avgRating}
        </p>
        <div className="flex items-center mt-2 mb-2">
          <img src={offerImg} alt="" className="h-4 mx-1" />
          <span className="text-[#a0522d] text-sm  ">
            {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
              ? "60% off | Use TRYNEW"
              : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
