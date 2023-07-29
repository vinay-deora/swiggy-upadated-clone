import { useEffect, useState } from "react";


const useRestaurant=(resId)=>{
    const [RestaurantMenu , setRestaurantMenu]= useState(null)
    useEffect(()=>{
        getRestaurantInfo()
    },[])
    
 async function getRestaurantInfo(){
    const data= await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`+ resId)
    const json = await data.json();
    console.log(json.data);
    setRestaurantMenu(json.data)
 }
 return RestaurantMenu;
}
export default useRestaurant;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.02301591114322&lng=73.29904331148849&restaurantId=${resId}&submitAction=ENTER

// https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`