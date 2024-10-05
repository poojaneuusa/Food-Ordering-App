import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page TestCases", () => {
    
test("Should load contact us component" , () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");//heading is rendered on screen or no
    //const button = screen.getByRole("button");

    //Assertion
    expect(heading).toBeInTheDocument();
});

// test("Should load button inside contactUs component" , () => {
//     render(<Contact/>);

//     const button = screen.getByText("Random");

//     //Assertion
//     expect(button).toBeInTheDocument();
// });

test("Should load input name inside contactUs component" , () => {
    render(<Contact/>);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
});

it("Should load 2 input boxes inside contactUs component" , () => {
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).not.toBe(3);
});

});
//describe inside describe as well.. group of test cases
//test() === it()