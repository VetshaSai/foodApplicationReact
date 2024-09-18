import { useParams } from "react-router-dom";
import ShimmerCards from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import CatagaryMenuList from "./CatagaryMenuList";
import { useState } from "react";

const RestaurentBody = () => {
  const { resID } = useParams();
  const [showIndex, setShowIndex]=useState(0);
  resInfo = useRestaurentMenu(resID);

  if (resInfo === null) return <ShimmerCards />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("Data", resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const Catagaries =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("filteredDataaaaa", Catagaries);
  return (
    <div className="restroInfo">
      <h1 className="font-extrabold text-center">{name}</h1>
      <p className="font-bold text-center">{costForTwoMessage}</p>
      <div className="restroMenu">
        {Catagaries.map((item, index) => (
          <CatagaryMenuList
            key={item?.card?.card.title}
            data={item?.card?.card}
            showItems={ index === showIndex ? true : false}
            setShowIndex = {()=> setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurentBody;
