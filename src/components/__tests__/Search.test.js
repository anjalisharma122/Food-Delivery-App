import { render ,screen ,fireEvent} from "@testing-library/react";
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



test("Should search resList for burger text input" ,async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />

        </BrowserRouter>
    )
);
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

        const searchBtn =screen.getByRole("button" , {name:"Search"});
        
        const searchInput =screen.getByTestId("searchInput");

        fireEvent.change(searchInput ,{target:{value: "burger"}});
        fireEvent.click(searchBtn);

        const cardsAfterSearch =screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(2);

        expect(searchBtn).toBeInTheDocument();
});