import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/sliceCart";

const ItemsList = ({items}) =>{
    // console.log("datatatata",items);
    const dispatch= useDispatch();

    const handelCartItems = (item)=>{
      dispatch(addItem(item));
      
    }
    return(
        <div>
          {items.map((item) => (
            <div className="flex border-b-2 border-gray-200 my-12" key={item.card.info.id}>
                <div className="w-9/12">
                <p className="font-semibold">{item.card.info.name} </p>
                <p className="font-semibold">₹{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</p>
                <p className="font-light">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 my-4 relative"> 
                    <img  className="w-full rounded-md" src={CDN_URL+item.card.info.imageId}></img>
                    <button className="bg-red-500 text-white px-4 absolute bottom-2 left-3  rounded-lg" onClick={()=>handelCartItems(item)}>Add</button>
                </div>
            </div>
          ))}
        </div>
    )
}

export default ItemsList;