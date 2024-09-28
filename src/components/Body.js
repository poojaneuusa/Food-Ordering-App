import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //Local state variable- super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
   
    useEffect( ()=>{
        fetchData();
    }, []);
    //console.log("Body rendered");// is printed 1st then useEffect is called.
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        const json = await data.json(); 
       // console.log(json);
        setListOfRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }; 
    //conditional rendering
    if(listOfRestaurants.length === 0){
      // return <h1>Loading....</h1>
       return <Shimmer/>;

    }
    
   
    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //filter the restaurant cards and update UI
                        //searchText
                        //Value is bind to searchText and this searchText is empty so i cant type anything
                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                className="filter-btn"
                onClick={ ()=> {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info?.avgRating > 4
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
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant}/>
                            </Link>
                    ))
                }
                
                
            </div> 
        </div>
    );
};

export default Body;