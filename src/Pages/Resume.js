import { useState, useEffect } from "react";


const Resume =()=> {
    // Varaibles

    // States

    // On Loads

    // Page Functions

    // HTML Functions

    // Render
    return (
    <div className="flex flex-col grow w-full h-full justify-between overflow-y-auto scrollbar-hidden">
        <div className="w-full h-[100px] md:h-[90px] flex flex-col justify-center pl-16 border-b md:border-b-0 border-b-stone-400 dark:border-b-stone-600
            md:pl-4">
            <h1 className="text-5xl md:text-3xl">Bernardo Klingelfus</h1>
            <p>Full Stack Developer</p>
        </div>
        <h2 className="w-full min-h-[5%] flex items-center px-16 md:px-4 text-3xl md:text-2xl ">Resume</h2>
        <div className="w-full flex flex-col px-16 md:px-4 text-xl md:text-xl">
            <h3 className="border-b border-b-stone-800 dark:border-b-stone-400 mb-4">Core techs I use, but not limited to:</h3>
            <div className="skills-box">
                <div className="relative group">
                    <span className="tool-popup">HTML</span>
                    <img src={require('../Images/html.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">CSS</span>
                    <img src={require('../Images/css.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">JavaScript</span>
                    <img src={require('../Images/javascript.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Bootstrap</span>
                    <img src={require('../Images/bootstrap.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Tailwind</span>
                    <img src={require('../Images/tailwind.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">EJS</span>
                    <img src={require('../Images/ejs.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">React</span>
                    <img src={require('../Images/react.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Jwt</span>
                    <img src={require('../Images/jwt.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Python</span>
                    <img src={require('../Images/python.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Django</span>
                    <img src={require('../Images/django.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">C#</span>
                    <img src={require('../Images/csharp.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">.NET</span>
                    <img src={require('../Images/dotnet.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">Node</span>
                    <img src={require('../Images/node.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">MongoDB/Atlas</span>
                    <img src={require('../Images/mongodb.png')} alt='tech logo' className="tool-logo"></img>
                </div>
                <div className="relative group">
                    <span className="tool-popup">PSQL</span>
                    <img src={require('../Images/psql.png')} alt='tech logo' className="tool-logo"></img>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col px-16 md:px-4 text-xl md:text-xl ">
            <h3 className="border-b border-b-stone-800 dark:border-b-stone-400 mt-4 mb-2">General background:</h3>
            <p className="text-base pl-4">Started out as a bachelors in Business Adminstration and Economics because it allowed me to see things from a big picture as well as permutate through a variety of subjects. And later I would find out that, after pursuiting opportunities in more strategic roles related to data analytics, what I wanted was to work in a field that was connected to the future and that helped me build experiences both for myself and for others. And that is how I got into tech.</p>
            <h3 className="border-b border-b-stone-800 dark:border-b-stone-400 mt-4 mb-2">A little bit about some of my interests:</h3>
            <p className="text-base pl-4">In case we ever meet these are some of my favorite topics to talk about: </p>
            <ul className="list-disc ml-16 text-base">
                <li>Travelling;</li>
                <li>Sports;</li>
                <li>Story telling (series, movies, video games, etc.);</li>
                <li>Technology;</li>
                <li>Economy.</li>
            </ul>
            <a href={require('../Bernardo Klingelfus - Resume.pdf')} target="_blank" rel="noopener noreferrer" className="text-center w-fit mx-auto my-12 hover:text-stone-400 dark:hover:text-stone-200">
                View Resume
                <i class="fa-solid fa-file-arrow-down mx-2"></i>
            </a>
        </div>
    </div>
    )
}

export default Resume;