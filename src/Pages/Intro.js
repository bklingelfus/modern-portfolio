import { useState, useEffect } from "react";
import One_Shot_Dark from '../Images/One_Shot_Dark.png'
import One_Shot_Light from '../Images/One_Shot_Light.png'


const Intro =(props)=> {
    // Varaibles

    // States

    // On Loads

    // Page Functions

    // HTML Functions

    // Render
    return (
    <div className={(props.introFade?'opacity-100 ':'opacity-0 pointer-events-none ')+"absolute items-center w-screen h-screen bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-400 transition-all duration-1000 ease-in-out"}>
        <div className="h-full w-full flex items-center">
            <img src={(props.darkTheme?One_Shot_Light:One_Shot_Dark)} alt="Animation" className="w-auto h-auto max-w-full max-h-[600px] mx-auto"></img>
        </div>
    </div>
    )
}

export default Intro;