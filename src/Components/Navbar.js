import { useState, useEffect } from "react";


const Navbar =(props)=> {
    // Varaibles

    // States
    const [menu, setMenu] = useState(false)

    // On Loads

    // Page Functions
    const changePage = (num) => {
        props.setPage(num);
        setMenu(false);
    }
    const goToIntro = (num) => {
        props.setPage(num);
        setMenu(false);
        props.setIntro(true);
    }

    // HTML Functions

    // Render
    return (
    <>
    {/* Normal Navbar */}
    <div className="flex flex-col justify-between items-center w-14 h-screen border-r border-stone-400 dark:border-stone-600
        md:flex-row md:w-screen md:h-16 md:border-r-0 md:border-b ">
        <div onClick={()=>{setMenu(!menu)}} className="h-3/10 w-full md:w-1/3 md:h-full">
            <div className="w-full h-[100px] p-2 flex justify-around 
                border-b border-b-stone-400 hover:bg-stone-300
                dark:border-b-stone-600 dark:hover:bg-black 
                cursor-pointer group md:w-16 md:h-full md:mr-auto md:border-b-0">
                <div className="w-full my-auto">
                    <div className="menu-bar duration-75 w-5/6 md:w-10/12 group-hover:bg-red-400"></div>
                    <div className="menu-bar duration-100 w-4/6 md:w-8/12 group-hover:bg-sky-400"></div>
                    <div className="menu-bar duration-200 w-3/6 md:w-6/12 group-hover:bg-amber-400"></div>
                    <div className="menu-bar duration-300 w-2/6 md:w-4/12 group-hover:bg-emerald-500"></div>
                </div>
            </div>
        </div>
        <div onClick={()=>{goToIntro(0)}} className="h-4/10 p-2 flex flex-col justify-center items-center group
            hover:text-stone-500 dark:hover:text-stone-200
            md:w-1/3 md:h-auto">
            <p className="writing-sideways rotate-180 m-2 mb-6 text-2xl cursor-pointer md:hidden">Bernardo Klingelfus</p>
            <img src={require((props.darkTheme?'../Images/Logo_Light.png':'../Images/Logo_Dark.png'))} alt="logo" className="w-auto h-auto max-w-full max-h-full rotate-[-90deg] cursor-pointer 
                group-hover:opacity-60 dark:group-hover:contrast-200 dark:group-hover:opacity-100
                md:rotate-0 md:h-12"></img>
        </div>
        <div className="h-3/10 p-2 flex flex-col justify-end items-center
                        md:w-1/3 md:h-auto">
            <i onClick={props.handleMode} className="fa-solid fa-circle-half-stroke mb-10 text-2xl cursor-pointer 
                transition-all duration-1000
                rotate-[-90deg] dark:rotate-[270deg] 
                md:mb-0 md:ml-auto md:mr-2"></i>
            <a href="https://www.linkedin.com/in/bernardo-klingelfus/" target="_blank" rel="noopener noreferrer" className="m-2 text-lg hover:text-xl md:hidden">
                <i className="fa-brands fa-linkedin-in"></i>
                {/* <i className="fa-brands fa-linkedin"></i> */}
            </a>
            <a href="https://github.com/bklingelfus/" target="_blank" rel="noopener noreferrer" className="m-2 text-lg hover:text-xl md:hidden">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:bernardoklingelfus@gmail.com?Subject=Portfolio Contact" target="_blank" rel="noopener noreferrer" className="m-2 text-lg hover:text-xl md:hidden">
            {/* <i className="fa-solid fa-envelope"></i> */}
                <i className="fa-regular fa-envelope"></i>
            </a>            
        </div>
    </div>
    {/* Menu Options */}
    <div className={(menu?'opacity-100 ':'opacity-0 pointer-events-none ')+'z-10 absolute flex w-screen h-screen bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-400 transition-all duration-300 md:flex-col'}>
        <div onClick={()=>{setMenu(!menu)}} className='w-56 h-full flex justify-around items-center
            border-r border-r-stone-400 dark:border-r-stone-600 hover:bg-stone-300 dark:hover:bg-black
            md:w-full md:h-28 md:border-r-0 md:border-b md:border-b-stone-400 md:dark:border-b-stone-600'>
            <div className={(menu?'opacity-100 block':'opacity-0 hidden')}>
                <div className="w-24 h-[2px] rotate-45 bg-stone-800 dark:bg-stone-400 md:w-12"></div>
                <div className="w-24 h-[2px] rotate-[135deg] bg-stone-800 dark:bg-stone-400 md:w-12"></div>
            </div>
        </div>
        <div className="flex flex-col w-full">
            <button onClick={()=>{changePage(0)}} className={"menu-options borderLeft after:border-b-red-400 "+(props.page===0?'border-b-red-400 dark:border-b-red-400':'')}>Home</button>
            <button onClick={()=>{changePage(1)}} className={"menu-options borderLeft after:border-b-sky-400 "+(props.page===1?'border-b-sky-400 dark:border-b-sky-400':'')}>Projects</button>
            <button onClick={()=>{changePage(2)}} className={"menu-options borderLeft after:border-b-amber-400 "+(props.page===2?'border-b-amber-400 dark:border-b-amber-400':'')}>Resume</button>
            <button onClick={()=>{changePage(3)}} className={"menu-options borderLeft after:border-b-emerald-500 "+(props.page===3?'border-b-emerald-500 dark:border-b-emerald-500':'')}>Contact</button>
            <p className="mt-auto w-full text-right pr-10 pb-4 
                md:fixed md:bottom-0 md:text-center md:pr-0">
                Fully built and designed by 
                <span className="italic p-2 underline text-lg">Bernardo Klingelfus</span> 
                2023 
                <i className="fa-regular fa-copyright p-2 text-sm"></i>
            </p>
        </div>
    </div>
    </>
    )
}

export default Navbar;