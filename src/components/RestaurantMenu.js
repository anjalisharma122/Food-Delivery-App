import {useEffect , useState} from "react" ;
const RestaurantMenu =()=>{
    const [resInfo ,setResInfo]=useState(null);


    useEffect(()=>{
        fetchMenu();
    },[]);
    

    const fetchMenu =async()=>{
        const data =await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=18973&catalog_qa=undefined&submitAction=ENTER"
        );
        const json =await data.json();
        console.log(json);
        setResInfo(json.data)
    };
    return resInfo === null? 
    ( <Shimmer />):( 
        <div className ="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li> Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu ;