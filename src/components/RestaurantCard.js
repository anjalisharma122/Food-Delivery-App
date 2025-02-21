import {CDN_URL} from "../utils/constants" ;

const RestaurantCard = (props) =>{
    const {resData}=props;
   
    const{
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      
     }=resData?.info;
     const {
       deliveryTime 
     }=resData?.info?.sla ;
    
    return(
        <div className="m-4 p-4 w-[245px] rounded bg-gray-50 hover:bg-gray-200" style={{
            
        }}>
            <img 
            className="rounded -lg"
            alt="res-card"
            src= {CDN_URL+cloudinaryImageId }
             /> 
            <h3 className ="font-bold py-4 text-lg" >{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    );
};

export default RestaurantCard;