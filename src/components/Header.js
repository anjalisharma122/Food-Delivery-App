
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [btnNameReact ,setBtnNameReact ]=useState("Login");

    const onlineStatus =useOnlineStatus() ;


    return(
        <div className="flex justify-between bg-pink-100 drop-shadow-lg   lg:bg-green-50"> 
            <div className="logo-container">
                <img className="w-44"
                src= {LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul  className ="flex p-4 m-4">
                    <li className="px-4 font-bold">Online Status : {onlineStatus ? "✅ " :"🔴"}</li>
                    <li className="px-4 font-bold">
                    <Link to ="./">Home</Link>
                    </li>
                    <li className="px-4 text-gray-800 font-semibold ">
                        <Link to ="./about">About Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to = "./contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to = "./grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">Cart</li>
                    <button className ="font-bold" 
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
