import ItemsList from "./ItemsList";
import {useSelector } from "react-redux";
import { clearItem } from "../utils/sliceCart";
import { useDispatch } from "react-redux";


const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const clearCart = () =>{
        dispatch(clearItem());
    }

    console.log("cartItems", cartItems);
    return(
        <div className="text-center font-bold m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-red-400 rounded-lg" onClick={clearCart}>Clear</button>
                {cartItems.length === 0 ? <h2>Cart is empty...select food items.. </h2> : <ItemsList items={cartItems}></ItemsList>}
            </div>
        </div>
    )
}

export default Cart;