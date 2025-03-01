import { render ,screen ,fireEvent} from "@testing-library/react";
import { act } from "react";
import  RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore" ;

global.fetch =jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
)

test("Should load restaurant menu component" ,async()=>{
    await act( async()=>
    render(
        <Provider store ={appStore}>
            <RestaurantMenu />
        </Provider>
    )
    )
    const accordionHeader =screen.getByText("American Classic (New Launch) (10)");
    await act(async()=>{
        fireEvent.click(accordionHeader);
    });

        expect(screen.getAllByTestId("foodItems").length).toBe(10);
});