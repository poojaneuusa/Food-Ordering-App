import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/> {/* This will render the children components based on route */}
        </div>

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
            }

        ],
        errorElement: <Error />
    }
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout/>);
//Earlier we were rendering this app directly, now 

root.render(<RouterProvider router={appRouter} />);