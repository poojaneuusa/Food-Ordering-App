import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
            <Body/>
        </div>

    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
