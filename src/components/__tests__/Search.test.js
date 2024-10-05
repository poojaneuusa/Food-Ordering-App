import { render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn( ()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
}); //this gives mock fetch function
//this fetch fun is mocking actual fetch which browser gives us.
//we cant make actual api call here coz test dont have ability to make api call and talk to the world, these are run on jsdom (browser like environment/no browser needed) 
it("Should render the body component with Search", async () => {
    
    await act ( async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
        ));
    
        const searchBtn = screen.getByRole("button", {name: "Search"});
        //console.log(searchBtn);
        expect(searchBtn).toBeInTheDocument();
});