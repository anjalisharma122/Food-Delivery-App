import {  fireEvent , render ,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load header Component with a login button ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore} >  
            <Header/>
        </Provider>
        </BrowserRouter>
  
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

test("Should load header Component with a Cart Item ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore} >  
            <Header/>
        </Provider>
        </BrowserRouter>
  
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

test("Should change login to logout onClick ",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore} >  
            <Header/>
        </Provider>
        </BrowserRouter>
  
    );

    const loginButton = screen.getByRole("button" ,{name :"Login"});

    fireEvent.click(loginButton )
    const logoutButton = screen.getByRole("button" ,{name :"Logout"});

    expect(logoutButton).toBeInTheDocument();
});