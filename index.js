import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>


            </div>

        </div>
    )
};


const RestaurentCard = () =>{
    return(
        <div className="res-card" style={{
            backgroundColor :"#f0f0f0",
        }}>
            <img 
            className="res-logo"
            alt="res-card"
            src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/27/c9c803ce-a894-4aea-a176-0f266b965f08_c1090c20-f317-464b-9720-0bb01fe58873.jpg"
             />
            <h3>Meghana Foods</h3>
            <h4>Biryani ,North Indian , Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>

        </div>
    );
};
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />

            </div>
        </div>
    );
};

const AppLayout = ()=>{
    return <div className="index">
        <Header />
        <Body />
    </div>
    
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
