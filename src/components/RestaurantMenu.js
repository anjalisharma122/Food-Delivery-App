import {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory" ;

const RestaurantMenu =()=>{
    const {resId}=useParams();
         
    const resInfo = useRestaurantMenu(resId);
    const [showIndex,setShowIndex]=useState(0);
  
    if(resInfo === null) return<Shimmer />

    



    const { name , cuisines , costForTwoMessage ,avgRating}=
        resInfo?.cards[2]?.card?.card?.info ; 
    const {deliveryTime}=resInfo?.cards[2]?.card?.card?.info.sla;
    const { itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

        // console.log(itemCards);
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories= 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);



    return ( 
        
            
        <div>
        <div className="flex justify-center items-center">
        <div className ="bg-white shadow-xl  shadow-gray-300  rounded-3xl p-6  m-6 w-5xl  border border-gray-200  ">
            <h1 className="text-3xl font-bold text-gray-900 ">{name}</h1>
            <div className="flex items-center space-x-2 mt-3">
            <p className="font-bold text-gray-800 text-lg">❇️{avgRating}</p>
            <span className =" font-bold text-lg text-gray-800"> {costForTwoMessage}</span>
            </div>
            
            <div className="mt-1">
            <p className="text-red-400 font-bold text-xl underline">{cuisines.join(" , ")} </p>
            </div>
        </div>
          
        </div>
        <div className="text-center">
          {/*category accordian*/ }
          {categories.map((category,index)=>(
          <RestaurantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItem ={index===showIndex ? true :false }
            setShowIndex={()=>setShowIndex(index)} 
          />
          ))}
        </div>
      </div>
        
    );
};
export default RestaurantMenu ;