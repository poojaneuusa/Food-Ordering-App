import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <div className="flex justify-between bg-pink-100 shadow-xl">
            <div className="w-20">
                <img className="p-2" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">

                    <li className="px-4">
                        Online Status: {onlineStatus? "✅" : "🔴" }
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>

                    <button className="login px-4"
                    onClick={()=>{
                       if(btnName === "Login"){
                        setBtnName("Logout");
                       }else{
                        setBtnName("Login");
                       }
                        
                    }}>{btnName}</button>
                    <li className="font-medium">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;