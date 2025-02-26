import React ,{lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter ,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
const About =lazy(()=> import ("./components/About"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery =lazy(()=> import ("./components/Grocery"));
const AppLayout = ()=>{
    return (
    <Provider store={appStore}>
        <div className="index">
        <Header />
        <Outlet />
    </div>
    </Provider>
   
    );
    
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout /> ,
        children:[
        {
            path:"/",
            element:< Body />,
        },

        {
            path:"/about",
            element:<Suspense  fallback ={<h1>Loading...</h1>}>
                <About />
            </Suspense>,
            },
        {
        path:"/contact",
        element:< Contact />,
        },
        {
            path:"/grocery",
            element:<Suspense  fallback ={<h1>Loading...</h1>}>
                <Grocery />
            </Suspense>,
            },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />,
        },
        {
            path:"/cart",
            element:<Cart/>,
        },
   

    ],
    errorElement :<Error />,
},
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);