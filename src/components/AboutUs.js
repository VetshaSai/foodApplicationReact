import User from "./UserClass";
import userContext from "../utils/userContext";


const AboutUs = (props) =>{
    return <div>
        <h2>About This Page</h2>
        <p>This is developed for customers to order food....! </p>
        <userContext.Consumer>
           {({userLoggedIn})=> <h2 className="font-bold">{userLoggedIn}</h2>}
        </userContext.Consumer>
        <User name={"sai"} location={"Vizag"}/>
    </div>
};

export default AboutUs;