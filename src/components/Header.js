import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Log in");

  const {userLoggedIn} = useContext(userContext);
  //console.log("usecontext", userLoggedIn);

  let onlineStatus = useOnlineStatus();
  //Subscribing the store using selector
  const cartItems = useSelector((store)=> store.cart.items);
  //console.log("cartItems", cartItems);
  return (
    <div className=" bg-red-400 flex justify-between my-4 mx-2 shadow-lg rounded-lg">
      <div className="logo-container"> 
        <img className="w-36 rounded-full m-2" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex py-16 gap-10 px-8 font-semibold ">
          <li>Online Status{onlineStatus ? "😁" : "😢"}</li>
          <li className="hover:bg-white px-6 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-white px-6 rounded-md">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="hover:bg-white px-6 rounded-md">
            <Link to="/contactus">Contact Us</Link>
          </li>

          <li> <Link to="/cart">Cart ({cartItems.length } items)</Link></li>
          <button
            className="hover:bg-white px-6 rounded-md"
            onClick={() => {
              loginBtn === "Log in"
                ? setloginBtn("Log Out")
                : setloginBtn("Log in");
            }}
          >
            {loginBtn}
          </button>
          <li>{userLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
