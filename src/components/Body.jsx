import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/filterData";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setfilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[5]?.data?.data?.cards);
    setfilterRestaurants( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return filterRestaurants.length === 0 ? (
    <div className="p-7 m-8 mx-12 ">
      <Shimmer />
    </div>
  ) : (
    <div className="py-8 bg-white">
      <div className="justify-evenly mb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 mb-[6px] m text-white py-3">
          <h1 className="mx-10 rounded-2xl text-xl font-bold text-shadow-lg hover:text-gray-800 ">
            Vinay Deora, ReactJs Developer
          </h1>
        </div>

        <div className="flex items-center mb-4 sm:mb-0">
          <input
            type="text"
            className="no-underline search-Text rounded-lg p-3 border-b outline-none bg-transparent underline"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setfilterRestaurants(data);
            }}
            type="button"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </div>
        <div className="sm:hidden  flex flex-wrap gap-4 cursor-pointer text-xs justify-center sm:justify-start">
          <div className="flex items-center">
            <img
              className="h-6"
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
              loading="lazy"
            />
            <span className="">Delivery</span>
          </div>
          <div className="flex items-center">
            <img
              className="h-6"
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              loading="lazy"
            />
            <span className="whitespace-nowrap">Dining Out</span>
          </div>
          <div className="flex items-center">
            <img
              className="h-6"
              alt="illustration"
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              loading="lazy"
            />
            <span className="">Nightlife</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {filterRestaurants.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
            >
              <Link to={`/restaurant/${item.info.id}`} key={item?.info?.id}>
                <RestrauntCard {...item?.info} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
