
export const filterData = (searchText, allRestaurants)=>{
  const filterData =  allRestaurants.filter((restro)=>
  restro?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
return filterData;
}