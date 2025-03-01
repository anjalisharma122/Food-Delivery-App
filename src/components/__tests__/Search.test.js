import { render ,screen } from "@testing-library/react";
import Body from "../Body";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})



test("Should render the body component" ,async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />

        </BrowserRouter>
    )
);


        const searchBtn =screen.getByRole("button" , {name:"Search"});
        console.log(searchBtn);
        expect(searchBtn).toBeInTheDocument();
});