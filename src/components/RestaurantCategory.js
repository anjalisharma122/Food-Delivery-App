import {useState} from "react";
import ItemList from "./ItemList";





const RestaurantCategory =({data ,showItem ,setShowIndex})=>{
    const handleClick =()=>{
        setShowIndex();
    };



   
    
    return <div >
        {/* Header */}
        <div className="w-3/4 mx-auto my-4 shadow-lg p-4 bg-[#FDF7E3]  shadow-gray-200">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-[#2F402F] text-lg">▼</span>

            </div>
            
           {showItem && <ItemList items={data.itemCards}/>}
        </div>
        
     
        
    </div>
}

export default RestaurantCategory;