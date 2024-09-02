import RestaurentCard from "./RestroCard";
import restaurents from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerCards from "./Shimmer";

const Body = () =>{

    const [listOfRestaurents, setlistOfRestaurents] = useState([]);
    useEffect(
        ()=>{
            fetchData()
        },[]);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9770286&lng=77.5773054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        console.log(json);
        setlistOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Conditional Rendering
    // if(listOfRestaurents.length === 0){
    //     return <ShimmerCards/>
    // }
    return listOfRestaurents.length === 0 ?  <ShimmerCards/> : (
    <div className="body">
        {/* <div className="search">
            <input placeholder="seacrch here.."></input>
            <button className="searchButton">Seacrh</button>
        </div> */}
        <div className="filter">
            <button className="filter-btn" onClick={ 
                () =>{
                    filteredData = listOfRestaurents.filter((res) => {return res.card.card.info.avgRating>4.4 });
                    setlistOfRestaurents(filteredData)
            }}>Top Rating Restaurants</button>
        </div>
        <div className="setBackToAllRes">
            <button className="setBack-btn" onClick={ 
                () =>{
                    setlistOfRestaurents(restaurents);
            }}>Remove filter</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurents.map(
                    (restaurant) => <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
                )           
            }
        </div>
    </div>
    );
}

export default Body;