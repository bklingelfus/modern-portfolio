import { useState, useEffect } from "react";
import { ContactUs } from "../Components/ContactUs";
import One_Shot_Dark from '../Images/One_Shot_Dark.png'
import One_Shot_Light from '../Images/One_Shot_Light.png'

const Contact =(props)=> {
    // Varaibles

    // States

    // On Loads

    // Page Functions

    // HTML Functions

    // Render
    return (    
    <div className="flex flex-col grow w-full h-full justify-between">
        <div className="w-full h-[100px] md:h-[90px] flex flex-col justify-center pl-16 border-b md:border-b-0 border-b-stone-400 dark:border-b-stone-600
            md:pl-4">
            <h1 className="text-5xl md:text-3xl">Bernardo Klingelfus</h1>
            <p>Full Stack Developer</p>
        </div>
        <h2 className="w-full h-[5%] flex items-center px-16 md:px-4 text-3xl md:text-2xl">Contact Info</h2>
        <div className="w-full h-[20%] px-16 flex justify-center
        md:px-4">
            <div className="h-full flex items-center mx-8 md:mx-auto">
                <img  src={(props.darkTheme?One_Shot_Light:One_Shot_Dark)} alt="background animation" className="w-auto h-auto max-w-full max-h-full mx-auto"></img>
            </div>
            <div className="h-full text-right flex flex-col justify-around">
                <a href="https://www.linkedin.com/in/bernardo-klingelfus/" target="_blank" rel="noopener noreferrer"  className="flex justify-end items-center text-2xl w-fit ml-auto
                md:text-base hover:text-stone-400 dark:hover:text-stone-200 transition-all duration-300">
                    <i className="fa-brands fa-linkedin-in mx-4"></i>
                    <p>@Bernardo Klingelfus</p>
                </a>
                <a href="https://github.com/bklingelfus/" target="_blank" rel="noopener noreferrer"  className="flex justify-end items-center text-2xl w-fit ml-auto
                md:text-base hover:text-stone-400 dark:hover:text-stone-200 transition-all duration-300">
                    <i className="fa-brands fa-github mx-4"></i>
                    <p>@bklingelfus</p>
                </a>
                <a href="mailto:bernardoklingelfus@gmail.com?Subject=Portfolio Contact" target="_blank" rel="noopener noreferrer"  className="flex justify-end items-center text-2xl w-fit ml-auto
                md:text-base hover:text-stone-400 dark:hover:text-stone-200 transition-all duration-300">
                    <i className="fa-regular fa-envelope mx-4"></i>
                    <p>bernardoklingelfus@gmail.com</p>
                </a>
            </div>
        </div>
        <div className="w-full h-[60%] overflow-y-auto scrollbar-hidden">
            <ContactUs/>
        </div>
    </div>
    )
}

export default Contact;