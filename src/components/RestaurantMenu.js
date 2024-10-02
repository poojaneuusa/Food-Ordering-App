import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //this hook lets us read dynamic id of different restaurants
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    /*const params = useParams();
    console.log(params); */
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex , setShowIndex] = useState(null);


    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines,costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card; 
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        c => c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-semibold text-lg"> {cuisines.join(', ')} - Rs.{costForTwo/100} for two </p>
            
            {categories.map((category , index) => (
                //Controlled component
                <RestaurantCategory key={category?.card.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=> setShowIndex(index)}/>
            ))}
            
            {/*<ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100|| item.card.info.defaultPrice/100}</li>
                    ))}
            </ul>*/}
        </div>
    );
}

export default RestaurantMenu;

//It has only one job of displaying the menu
//Fetching is done by a different hook