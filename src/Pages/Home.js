import { useState, useEffect } from "react";
import Ping_Pong_Dark from '../Images/Ping_Pong_Dark.png'
import Ping_Pong_Light from '../Images/Ping_Pong_Light.png'

const Home =(props)=> {
    // Varaibles

    // States

    // On Loads

    // Page Functions

    // HTML Functions

    // Render
    return (
    <div className="flex flex-col grow w-full h-full justify-around">
        <div className="w-full  h-[100px] md:h-[90px] flex flex-col justify-center pl-16
            md:pl-4">
            <h1 className="text-5xl md:text-3xl">Bernardo Klingelfus</h1>
            <p>Full Stack Developer</p>
        </div>
        <div className="w-full h-[55%]">
            <div className="flex items-center h-full w-full">
                <img  src={(props.darkTheme?Ping_Pong_Light:Ping_Pong_Dark)} alt="background animation" className="w-auto h-auto max-w-full max-h-full mx-auto"></img>
            </div>
        </div>
        <div className="w-full h-[30%] flex flex-col items-center pr-16 md:pr-4">
            <p className="w-1/2 max-w-[600px] text-right text-xl md:text-base ml-auto my-2 md:w-[80%]">I am a <span className="underline underline-offset-4">Full Stack Developer</span> passionate about turning <span className="text-red-400">ideas into reality</span></p>
            <p className="w-1/2 max-w-[600px] text-right text-xl md:text-base ml-auto mt-2 md:w-[80%]">The <span className="text-sky-400">creative process</span> involved in both building user journeys and</p>
            <p className="w-1/2 max-w-[600px] text-right text-xl md:text-base ml-auto mb-2 md:w-[80%]">coming up with <span className="text-amber-400">different functionalities</span> fascinates me</p>
            <p className="w-1/2 max-w-[600px] text-right text-xl md:text-base ml-auto my-2 md:w-[80%]">I build <span className="text-emerald-500">excellent solutions</span> with clean and elegant code</p>
        </div>
    </div>
    )
}

export default Home;