import React from "react";

class User extends React.Component{
    constructor(props){
        super(props),
        this.state={
            count:0
        }
    }
    
    render(){
        const {name, location} = this.props;
        return(
            <div className="UserDtls">
                <h1>Counter {this.state.count}</h1>
                <button onClick={
                    ()=>this.setState(  {count : this.state.count+1})
                }>Counter Increase</button>
                <h1>Name is {name} </h1>
                <h2>Location {location}</h2>
            </div>
        );
     }
}

export default User;