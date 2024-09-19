import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    //Local state variable- super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={ ()=> {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );

                    //console.log(filteredList);
                    setListOfRestaurant(filteredList);
                } }
                >
                Top Rated Restaurants  
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
                
                
            </div>
        </div>
    );
};

export default Body;