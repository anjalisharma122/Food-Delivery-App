
import logo from "../utils/logo.png"
import {useState ,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from"../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
    const [btnNameReact ,setBtnNameReact ]=useState("Login");

    const onlineStatus =useOnlineStatus() ;
    const {loggedInUser}=useContext(UserContext);
  

    const cartItems =useSelector((store)=>
        store.cart.items);
    

    return(
        <div className="flex justify-between drop-shadow-lg   bg-amber-50"> 
            <div className="logo-container">
                <img className="w-28 p-2 mx-2"
                src= {logo}
                />
            </div>
            <div className="flex items-center">
                <ul  className ="flex p-4 m-4">
                    <li className="px-4 font-semibold text-xl">Online Status : {onlineStatus ? "✅ " :"🔴"}</li>
                    <li className="px-4 font-semibold text-xl">
                    <Link to ="./">Home</Link>
                    </li>
                    <li className="px-4 text-gray-800 font-semibold text-xl ">
                        <Link to ="./about">About Us</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to = "./contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to = "./grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-semibold text-xl">
                        <Link to="./cart">Cart-({cartItems.length}items)</Link>
                    </li>
                    <button className ="font-semibold text-xl" 
                        onClick={()=>{
                        btnNameReact=== "Login"? setBtnNameReact("Logout") :
                        setBtnNameReact("Login");
                        
                    }}>
                        {btnNameReact}
                    </button>

                    <li className="px-4">{loggedInUser}</li>

                </ul>

 
            </div>

        </div>
    )
};

export default Header;
