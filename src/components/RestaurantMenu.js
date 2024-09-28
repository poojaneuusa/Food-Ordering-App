import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //this hook lets us read dynamic id of different restaurants
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);
    /*const params = useParams();
    console.log(params); */
    const {resId} = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);

    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card; 
    console.log(itemCards);
    
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>Rs.{costForTwo/100}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100|| item.card.info.defaultPrice/100}</li>
                    ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;