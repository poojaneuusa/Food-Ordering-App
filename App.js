import React from "react";
import ReactDOM from "react-dom/client";

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
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LJ76_EPEnY9vpN3YABmZcO3qOH3DkkC6VQ&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>

    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
