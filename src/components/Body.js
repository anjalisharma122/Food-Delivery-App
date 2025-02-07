import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = ()=>{
 
  const [listOfRestaurants ,setlistOfRestaurants] = useState(resList);

 
    return( 
        <div className="body">
            <div className="filter">
              <button className ="filter-btn" 
              onClick={()=>{
                filteredList = listOfRestaurants.filter(
                  (res)=>res.info.avgRating>4
                );
                setlistOfRestaurants(filteredList);
                
              }}
             
              > Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                listOfRestaurants.map(card=> {
                  return <RestaurantCard key={card.id} resData={card} />
                })
              }
            </div>
        </div>
    );
};

export default Body;