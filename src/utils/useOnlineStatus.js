import { useState } from "react";

const useOnlineStatus = ()=>{
    const[OnlineStatus, setOnlineStatus]=useState(true);
    //Adding event listner to keep status offline
    addEventListener("offline",()=>{
        setOnlineStatus(false)
    });

    addEventListener("online",()=>{
        setOnlineStatus(true)
    })
    return OnlineStatus;
}

export default useOnlineStatus;