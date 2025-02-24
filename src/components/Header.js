
import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [btnNameReact ,setBtnNameReact ]=useState("Login");

    const onlineStatus =useOnlineStatus() ;


    return(
        <div className="flex justify-between drop-shadow-lg   bg-white"> 
            <div className="logo-container">
                <img className="w-44"
                src= {LOGO_URL}
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
                    <li className="px-4 font-semibold text-xl">Cart</li>
                    <button className ="font-semibold text-xl" 
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
