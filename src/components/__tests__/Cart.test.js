import { render ,screen ,fireEvent} from "@testing-library/react";
import { act } from "react";
import  RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore" ;
import { BrowserRouter } from "react-router-dom";

global.fetch =jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
)

test("Should load restaurant menu component" ,async()=>{
    await act( async()=>
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <RestaurantMenu />
            
                <Header />
           
            
        </Provider>
        </BrowserRouter>
    )
    )
    const accordionHeader =screen.getByText("American Classic (New Launch) (10)");
    await act(async()=>{
        fireEvent.click(accordionHeader);
    });

        expect(screen.getAllByTestId("foodItems").length).toBe(10);
        const addBtns = screen.getAllByRole("button",{name:"Add +"});
        fireEvent.click(addBtns[0]);

        await expect(screen.findByText(/Cart - \(?1 items?\)?/i)).resolves.toBeInTheDocument();

    });
