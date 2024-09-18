import { CDN_URL } from "../utils/constants";
import { useContext} from "react";
import userContext from "../utils/userContext";

const RestaurentCard = (props) => {
    const {resData} = props;
    const{userLoggedIn}= useContext(userContext);
    const {name, cloudinaryImageId,cuisines,avgRating, id} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return <div className="res-card w-[300px] shadow-xl border rounded-md hover:shadow-red-300 hover:scale-110 my-6">
        <img className="res-img rounded-md" src={CDN_URL+cloudinaryImageId}></img>
        <div className="res-content p-3">
            <h2 className="font-bold">{name}</h2>
            <h4 className="cuisines">{cuisines.join(" ,")}</h4>
            <h4>Avg Rating {avgRating}</h4>
            <h4>Delivery {deliveryTime} mins</h4>
            <p>{userLoggedIn}</p>
        </div>
    </div>
}

const withPromotedLabel = () =>{
    return ()=>{
        return(
            <div>
                
            </div>
        )
    }
}

export default RestaurentCard;