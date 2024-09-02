import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [loginBtn , setloginBtn] = useState("Log in");
    return <div className="headerSection" id="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={
                    () =>{
                       loginBtn ==="Log in" ? setloginBtn("Log Out") : setloginBtn("Log in");
                    }

                }>{loginBtn}</button>
            </ul>
        </div>
    </div>
}

export default Header;