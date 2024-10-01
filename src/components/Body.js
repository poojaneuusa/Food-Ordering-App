import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //Local state variable- super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
   
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

    if(useOnlineStatus === false){
        return(
            <h1>Looks like you'r offline. Please check your internet connection!!</h1>
        );
    }


    //conditional rendering
    if(listOfRestaurants.length === 0){
      // return <h1>Loading....</h1>
       return <Shimmer/>;

    }
    
   
    return(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-md" 
                        onClick={()=>{
                        //filter the restaurant cards and update UI
                        //searchText
                        //Value is bind to searchText and this searchText is empty so i cant type anything
                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                         className="px-4 py-2 bg-green-100 rounded-md"
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
                

            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}>
                            
                            {restaurant.info.promoted ? (
                                <RestaurantCardPromoted resData={restaurant}/>
                            ) : (<RestaurantCard resData={restaurant}/>
                            )}
                            </Link>
                    ))
                }
                
                
            </div> 
        </div>
    );
};

export default Body;