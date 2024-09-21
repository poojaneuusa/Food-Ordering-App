import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    //Local state variable- super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
   
    useEffect( ()=>{
        fetchData();
    }, []);
    //console.log("Body rendered");// is printed 1st then useEffect is called.
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        const json = await data.json(); 
       // console.log(json);
        //setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }; 
    //conditional rendering
    if(listOfRestaurants.length === 0){
      // return <h1>Loading....</h1>
       return <Shimmer/>;

    }
    
   
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={ ()=> {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data?.avgRating > 4
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
                    ))//key={restaurant.data.id}
                }
                
                
            </div> 
        </div>
    );
};

export default Body;