import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="Logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"></img>
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
        <div className="res-card">
            <h3>Meghna Food</h3>
        </div>
    );
};
const Body = ()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
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
