// // import Skeleton from "react-loading-skeleton";

// // const Shimmer = () => {
// //   return (
// //     <div className="flex flex-wrap gap-4 py-2 m-auto">
// //       <ShimmerCard />
// //       <ShimmerCard />

// //     </div>
// //   );
// // };

// // const ShimmerCard = () => {
// //   return (
// //     <div className="flex flex-col gap-4 m-auto bg-gray-200 rounded-lg p-4">
// //       <Skeleton width={"100px"} height={"500px"}/>
// //       <Skeleton width={"80%"} height={"20px"}  />
// //       <Skeleton width={"90%"} height={"20px"}  />
// //       <Skeleton width={"70%"} height={"20px"}  />
// //     </div>
// //   )
// // };

// import Skeleton from "react-loading-skeleton";

// const Shimmer = () => {
//   return (
//     <div className="flex flex-wrap gap-4 py-2 m-auto">
//       <ShimmerCard />
//       <ShimmerCard />
//     </div>
//   );
// };

// const ShimmerCard = () => {
//   return (
//     <div className="flex flex-col gap-4 m-auto bg-gray-200 rounded-lg p-4">
//       <Skeleton width={"600px"} height={"200px"} />
//       <Skeleton width={"800px"} height={"20px"} />
//       <Skeleton width={"600px"} height={"20px"} />
//       <Skeleton width={"600px"} height={"20px"} />
//     </div>
//   );
// };

// export default Shimmer;

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 py-2 m-auto ">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
const ShimmerCard = () => {
  return (
    <div className="flex flex-col gap-1 m-auto md:m-0 rounded-full">
      <Skeleton width={"250px"} height={"155px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"150px"} height={"25px"} />
      <Skeleton width={"150px"} height={"25px"} />
    </div>
  );
};
export const ShimmerMenu = () => {
  return (
    <div className="w-2/3 my-2 m-auto">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="">
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
        </div>
        <Skeleton width={"250px"} height={"125px"} />
      </div>
      <div className="my-4">
        <Skeleton width={"300px"} height={"35px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row ">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
    </div>
  );
};
export default Shimmer;
