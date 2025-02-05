import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return( 
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              {
                resList.map(card => {
                  return <RestaurantCard key={card.id} resData={card} />
                })
              }
            </div>
        </div>
    );
};

export default Body;