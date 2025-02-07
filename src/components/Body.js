import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ()=>{

  const [listOfRestaurants ,setlistOfRestaurants] = useState([
    {
      "info" : {
                      "id": "671928",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating":3.8,
                      "sla": {
                        "deliveryTime": 28
                      }
                      
                    }
    },
    {"info" : {
                      "id": "671929",
                      "name": "MCD",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.3,
                      "sla": {
                        "deliveryTime": 28
                      }
                      
                    }
            
    },
    
      {"info" : {
                      "id": "671930",
                      "name": "Dominos",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "sla": {
                        "deliveryTime": 28
                      }
                      
                    }
    },
    
  ]);

 
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