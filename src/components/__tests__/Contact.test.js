import Contact from "../Contact";
import { render ,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load heading inside contact component" ,()=>{
    render(<Contact />);

    //Assertion
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component" ,()=>{
    render(<Contact />);
    
    //Assertion
    const button=screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component" ,()=>{
    render(<Contact />);
    
    //Assertion
    const input=screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
});

test("Should load 2 input boxes on the component component " ,()=>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})

