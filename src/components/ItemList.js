import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";
import {CDN_URL} from "../utils/constants";
const ItemList =({items})=>{

    const dispatch =useDispatch();

    const handleAddItem=(item)=>{
        //dispatch an action
        dispatch(addItem(item));
        
    };
    return (
        <div>
            {items.map((item)=>(
                <div 
                data-testid="foodItems"
                key={item.card.info.id} 
                className="p-2 m-2 border-gray-300 border-b-1 text-left flex justify-between " >
                    
                    <div className="w-9/12 ">
                        <div className="py-2 font-semibold">
                            <span >{item.card.info.name}</span>
                            <span>
                                - ₹{item.card.info.price ? item.card.info.price /100
                                :item.card.info.defaultPrice/100 }
                            </span>
                        </div>
                        <p className="text-s">{item.card.info.description}</p>

                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute ">
                        <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg cursor-pointer "
                        onClick ={()=>handleAddItem(item)}>
                            Add +
                        </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>

                    
                </div>
            ))

            }
        
        
       
        </div>
    )
}

export default ItemList;