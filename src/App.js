import React,{lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// React Element
/*
const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX!
    </h1>
);

const HeadingComponent = () => (
    <h1 className="heading">Namaste</h1>
);
*/
// Chunking
// Code splitting
// Dynamic bundling
// Lazy loading- when the main code loads initially, when we go to the link then only that component loads
// On demand loading 

//const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    //authentication
    const [userName, setUserName] = useState();

    useEffect(() => {
        //Make an API call and send username and password
        const data = {
            name: "Akshay Saini",
        };
        setUserName(data.name);
    }, []);


    return (
        <UserContext.Provider value={{loggedInUser: userName}}>

            <div className="app">
                <Header/>
                <Outlet/> {/* This will render the children components based on route */}
            </div>

        </UserContext.Provider>
        

    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId", //:resId is dynamic, change acc to id of restaurant
                element: <RestaurantMenu />
            }

        ],
        errorElement: <Error />
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
//Earlier we were rendering this app directly, now 

root.render(<RouterProvider router={appRouter} />);