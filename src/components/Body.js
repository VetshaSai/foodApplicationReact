import RestaurentCard from "./RestroCard";
import restaurents from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurents, setlistOfRestaurents] = useState([]);
  const [seacrhText, setseacrhText] = useState("");
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const  {userLoggedIn , setUsername} = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9770286&lng=77.5773054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setlistOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Look's like your internet disconnected...please check..!!</h1>;
  //Conditional Rendering
  // if(listOfRestaurents.length === 0){
  //     return <ShimmerCards/>
  // }

  //console.log("restData",listOfRestaurents);

  return listOfRestaurents.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="flex justify-center gap-3">
        <div className="search-container">
          <input
            className="border-2 m-3 rounded-md px-6 pyu-1"
            type="text"
            placeholder="seacrch here.."
            value={seacrhText} 
            onChange={(e) => {
              setseacrhText(e.target.value);
            }} 
          ></input>
          <button
            className="bottom-4 rounded-md px-6 py-1 hover:bg-red-400"
            onClick={() => {
              SearchData = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(seacrhText.toLowerCase())
              );
              setfilteredrestaurants(SearchData);
            }}
          >
            Seacrh
          </button>
        </div>
        <div className="filter py-2 ">
          <button
            className="filter-btn bottom-4 rounded-md px-6 py-1 hover:bg-red-400"
            onClick={() => {
              filteredData = listOfRestaurents.filter((res) => {
                return res.card.card.info.avgRating > 4.4;
              });
              setlistOfRestaurents(filteredData);
            }}
          >
            Top Rating Restaurants
          </button>
        </div>
        <div className="setBackToAllRes py-2">
          <button
            className="setBack-btn bottom-4 rounded-md px-6 py-1 hover:bg-red-400"
            onClick={() => {
              setlistOfRestaurents(restaurents);
            }}
          >
            Remove filter
          </button>
        </div>
        <label>User Name:</label>
        <input type="text" value={userLoggedIn} onChange={(e)=>{setUsername(e.target.value)}}></input>
      </div>
      <div className="res-container flex flex-wrap gap-8 m-4 justify-center">
        {filteredrestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurentBody/" + restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
