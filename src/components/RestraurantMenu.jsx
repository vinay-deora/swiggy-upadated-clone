// import { useParams } from "react-router"
// import useRestaurant from "../utils/useRestaurant";
// import { IMG_CDN_URL } from "./Config";
// const RestraurantMenu=()=>{
//     const params = useParams();
//     const {resId}= params;

//     const RestaurantMenu= useRestaurant(resId)
//     console.log(RestaurantMenu)
// return(
//     <>
//     <h1> Restraurant{RestaurantMenu?.resId} </h1>
//     <img src={IMG_CDN_URL+ RestaurantMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
//     <h1> Restraurant{ RestaurantMenu?.cards[0]?.card?.card?.info?.name} </h1>
//     <h1> Restraurant{ RestaurantMenu?.cards[0]?.card?.card?.info?.areaName} </h1>
//     <h1> avgRating :{ RestaurantMenu?.cards[0]?.card?.card?.info?.avgRating} </h1>
//     <h1> Restraurant{ RestaurantMenu?.cards[0]?.card?.card?.info?.feeDetails?.message} </h1>
//     {/* <h1> Restraurant namste</h1> */}
//     {/* hello */}
//     </>
// )
// }
// export default RestraurantMenu;

import { useParams } from "react-router";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./Config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const RestaurantMenu = useRestaurant(resId);

  const dispatch = useDispatch();
  const AddFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">
            Restaurant {RestaurantMenu?.resId}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {RestaurantMenu?.cards[0]?.card?.card?.info
                ?.cloudinaryImageId && (
                <img
                  src={
                    IMG_CDN_URL +
                    RestaurantMenu?.cards[0]?.card?.card?.info
                      ?.cloudinaryImageId
                  }
                  alt="Restaurant Image"
                  className="w-full rounded-lg"
                />
              )}
              <h2 className="text-2xl font-bold mt-4 mb-2">
                {RestaurantMenu?.cards[0]?.card?.card?.info?.name}
              </h2>
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                {RestaurantMenu?.cards[0]?.card?.card?.info?.areaName}
              </h3>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">
                  {RestaurantMenu?.cards[0]?.card?.card?.info?.avgRating}
                </span>
                <span className="text-sm text-gray-500">(Average Rating)</span>
              </div>
              <p className="mt-4 mb-6">
                {
                  RestaurantMenu?.cards[0]?.card?.card?.info?.feeDetails
                    ?.message
                }
              </p>
            </div>
            <div>{/* Add additional menu content here */}</div>
          </div>
        </div>
      </div>
      <h1 className="font-bold mt-4 mb-10 ml-4">
        Recommended (
        {
          RestaurantMenu?.cards[RestaurantMenu?.cards.length - 1]?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length
        }
        )
      </h1>

      <div className="mx-10">
        {RestaurantMenu?.cards[
          RestaurantMenu?.cards.length - 1
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => {
            return (
              <div
                className="flex flex-col justify-between border-b pb-6 mb-4 gap-6 md:flex-row"
                key={item?.card?.info?.id}
              >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                  <span className="font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      &#8377;
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : 150}
                    </span>
                    {item?.card?.info?.offerTags && (
                      <span className="text-[10px] font-medium px-[6px] bg-red-100 text-orange-500">
                        {item?.card?.info?.offerTags[0]?.title} |{" "}
                        {item?.card?.info?.offerTags[0]?.subTitle}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#535665]">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className=" flex flex-col gap-1 relative md:w-1/4 w-auto">
                  <img
                    src={
                      item?.card?.info?.imageId
                        ? IMG_CDN_URL + item?.card?.info?.imageId
                        : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                    }
                    alt=""
                    className="w-32 h-20 rounded self-center object-cover"
                  />

                  <button
                    className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-stone-600 transition-all duration-300 ease-in-out"
                    onClick={() => AddFoodItem(item)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
