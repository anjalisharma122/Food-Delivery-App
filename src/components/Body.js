import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return( 
        <div className="body">
            <div className="filter">
              <button className ="filter-btn" 
              onClick={()=>{
                console.group("Button Clicked")
              }}
              onMouseOver={()=>{
                console.group("Button Clicked")
              }}
              > Top Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                resList.map(card=> {
                  return <RestaurantCard key={card.id} resData={card} />
                })
              }
            </div>
        </div>
    );
};

export default Body;