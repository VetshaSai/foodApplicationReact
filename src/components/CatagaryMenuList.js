import { useState } from "react";
import ItemsList from "./ItemsList";

const CatagaryMenuList = ({ data , showItems, setShowIndex }) => {
  //console.log("props", data);
  //const [showItems, setShowItems]= useState(false);
  handelItems = ()=>{
    //console.log("clicked")
    //setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div>
      <div className=" bg-white my-3 flex  mx-48 p-3 border-b-2 border-gray-300 shadow-lg rounded-md justify-between" onClick={handelItems}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⤵</span>
        {showItems && <ItemsList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default CatagaryMenuList;
