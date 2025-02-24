import ItemList from "./ItemList";

const RestaurantCategory =({data})=>{
    
    return <div>
        {/* Header */}
        <div className="w-3/4 mx-auto my-4 bg -gray-50 shadow-lg p-4 ">
            <div className="flex justify-between">
            <span className="font font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-red-400 text-lg">▼</span>

            </div>
            
            <ItemList items={data.itemCards}/>
        </div>
        
        {/* Accordian Body */}
        
    </div>
}

export default RestaurantCategory