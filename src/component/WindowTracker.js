
import React, {useEffect,   useState} from "react";


function WindowTracker (){

    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)

    // useEffect can be consider as a tool to interact with some kind of outside system while keeping our local state in sync

    useEffect(()=>{
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', watchWidth)

        return function (){
            window.removeEventListener('resize', watchWidth)

            // this function existe to avoid a memory leak. This function has been created to clean the previous function that is connceted to our window, resgistered to our browser. Even in we remove the h1 by clicking on the button. The window still connected to our eventListener. Hence, still operating. This function is used to remove that eventListener when the h1 is not shown
        }
    }, [])

    // we don't need to add anything to our dependency


    return(
        <h1 className="window--width">Window width:{WindowWidth}</h1>
    )
}

export default WindowTracker