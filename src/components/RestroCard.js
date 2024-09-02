import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId,cuisines,avgRating, id} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return <div className="res-card">
        <img className="res-img" src={CDN_URL+cloudinaryImageId}></img>
        <div className="res-content">
            <h2>{name}</h2>
            <h4 className="cuisines">{cuisines.join(" ,")}</h4>
            <h4>Avg Rating {avgRating}</h4>
            <h4>Delivery {deliveryTime} mins</h4>
        </div>
    </div>
}

export default RestaurentCard;