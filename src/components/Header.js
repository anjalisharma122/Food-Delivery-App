
import logo from "../utils/logo.png"
import {useState ,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from"../utils/UserContext";
import { useSelector } from "react-redux";
import HOME_ICON from "../assets/home.svg";
import ABOUT_US from "../assets/aboutUs.png";
import CONTACT_US from "../assets/contact.png";
import GROCERY from "../assets/grocery.png";
import CART from "../assets/cart.png";




const Header = () =>{
    const [btnNameReact ,setBtnNameReact ]=useState("Login");

    const onlineStatus =useOnlineStatus() ;
    const {loggedInUser}=useContext(UserContext);
  

    const cartItems =useSelector((store)=>
        store.cart.items);
    

    return(
        <div className="flex justify-between drop-shadow-xl bg-[#9BA38E]"> 
            <div className="logo-container">
                <img className="w-28 mx-2"
                src= {logo}
                />
            </div>
            <div className="flex items-center">
                <ul  className ="flex p-4 m-4">
                    <li className="px-4  text-black font-semibold text-xl">Online Status : {onlineStatus ? "✅ " :"🔴"}</li>
                    <li className="px-4 text-black font-semibold text-xl">
                    <Link to ="./"> 
                        <img src={HOME_ICON} className="w-8 h-8"/>
                    </Link>
                    </li>
                  
                    <li className="px-4  text-black font-semibold text-xl">
                        <Link to = "./contact"><img src={CONTACT_US} className="w-8 h-8" /></Link>
                    </li>

                    <li className="px-4 text-black font-semibold text-xl">
                        <Link to = "./grocery"><img src={GROCERY} className="w-12 h-10" /></Link>
                    </li>
                   

                    <li className="px-4  text-black font-semibold text-xl">
                        <Link to="./cart"><img src={CART} className="w-12 h-12" />
                                        <span className="absolute top-8  bg-[#2F402F] text-white text-xs px-2 py-1 rounded-full">
                                            {cartItems.length}
                                        </span>
                        </Link>
                    </li>
                  
                    
                    <li className="px-4 text-black font-semibold text-xl ">
                        <Link to ="./about"><img src ={ABOUT_US} className="w-10 h-10" /> </Link>
                    </li>
                    
                    <button className ="font-semibold text-xl text-black" 
                        onClick={()=>{
                        btnNameReact=== "Login"? setBtnNameReact("Logout") :
                        setBtnNameReact("Login");
                        
                    }}>
                        {btnNameReact}
                    </button>

                    

                </ul>

 
            </div>

        </div>
    )
};

export default Header;
