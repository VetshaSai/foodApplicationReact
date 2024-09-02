import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const AppLayOut = () =>{
    return <div className="AppLayOut">
        <Header/>
        <Body/>
    </div>
}
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayOut/>);