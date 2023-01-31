import { useState, useEffect } from "react";
import { useHorizontalScroll} from '../Hooks/useHorizontalScroll';
import {useSwipeable} from 'react-swipeable'
import social1 from '../Images/social1.png'
import social2 from '../Images/social2.png'
import social3 from '../Images/social3.png'
import music1 from '../Images/music1.png'
import music2 from '../Images/music2.png'
import music3 from '../Images/music3.png'
import finance1 from '../Images/finance1.png'
import finance2 from '../Images/finance2.png'
import finance3 from '../Images/finance3.png'
import store1 from '../Images/store1.png'
import store2 from '../Images/store2.png'
import store3 from '../Images/store3.png'


const Projects =(props)=> {
    // Varaibles
    const scrollRef = useHorizontalScroll();

    // States
    const [currentImg, setCurrentImg] = useState(0);
    const [currentProj, setCurrentProj] = useState(0);

    // On Loads

    // Page Functions
    const swipePage =(num)=> {
        let newPage = currentProj + num;
        if (newPage>=0 && newPage<4) {
            setCurrentProj(newPage)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => swipePage(1),
        onSwipedRight: () => swipePage(-1)
    })

    // HTML Functions

    // Render
    return (
    <div className="h-full w-full flex flex-col">
        <div {...handlers} on className="grow flex max-h-[calc(100%-128px)]">
            <div className={"project-container scrollbar-hidden scroll-shadow" +((currentProj===0)?' ':' opacity-0 pointer-events-none w-0')}>
                <h3 className="project-name">Finance App</h3>
                <div className="project-images">
                    <img onClick={()=>{setCurrentImg(0)}} src={finance1} alt="project image" className={((currentImg===0)?'project-img1':((currentImg===1)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(1)}} src={finance2} alt="project image" className={((currentImg===1)?'project-img1':((currentImg===2)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(2)}} src={finance3} alt="project image" className={((currentImg===2)?'project-img1':((currentImg===0)?'project-img2':'project-img3'))+' '}></img>
                </div>
                <div className="project-description">
                    <p>A mock version of an investment portfolio manager that allows users to create an account, make a deposit and choose from a variety of assets the one they judge to be the best investment. The app is fully functional both for mobile and desktop users and has a margin for expanding in the future and elevating the complexity level. This project was a very refreshing opportunity to pick up a new technology and apply it right away and explore the differences from the other tools that you might know (in this case C# compared to JS and Python).</p>
                    <h3 className="project-tools">Tools Used</h3>
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
                            <span className="tool-popup">React</span>
                            <img src={require('../Images/react.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">Jwt</span>
                            <img src={require('../Images/jwt.png')} alt='tech logo' className="tool-logo"></img>
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
                            <span className="tool-popup">PSQL</span>
                            <img src={require('../Images/psql.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                    </div>
                    <a href="https://finance-app-fe.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
            </div>   
            <div className={"project-container scrollbar-hidden scroll-shadow" +((currentProj===1)?' ':' opacity-0 pointer-events-none w-0')}>
                <h3 className="project-name">Iris (Online Marketplace)</h3>
                <div className="project-images">
                    <img onClick={()=>{setCurrentImg(0)}} src={store1} alt="project image" className={((currentImg===0)?'project-img1':((currentImg===1)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(1)}} src={store2} alt="project image" className={((currentImg===1)?'project-img1':((currentImg===2)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(2)}} src={store3} alt="project image" className={((currentImg===2)?'project-img1':((currentImg===0)?'project-img2':'project-img3'))+' '}></img>
                </div>
                <div className="project-description">
                    <p>An interesting project which the goal was to make a functional app within 3 days. Initially it started out as a single store but branched to be a marketplace, Iris (the name of the app) combines two interfaces into one. Both stores and users can enter the app from the same entry point and use 80% of the features that are global, but to make it so they can interact with each other, only users can buy products (purchase orders) and on the other hand stores are the ones managing those requests. </p>
                    <h3 className="project-tools">Tools Used</h3>
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
                            <span className="tool-popup">Python</span>
                            <img src={require('../Images/python.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">Django</span>
                            <img src={require('../Images/django.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">PSQL</span>
                            <img src={require('../Images/psql.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                    </div>
                    <a href="https://online-store-frontend-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
            </div>     
            <div className={"project-container scrollbar-hidden scroll-shadow" +((currentProj===2)?' ':' opacity-0 pointer-events-none w-0')}>
                <h3 className="project-name">Music App</h3>
                <div className="project-images">
                    <img onClick={()=>{setCurrentImg(0)}} src={music1} alt="project image" className={((currentImg===0)?'project-img1':((currentImg===1)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(1)}} src={music2} alt="project image" className={((currentImg===1)?'project-img1':((currentImg===2)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(2)}} src={music3} alt="project image" className={((currentImg===2)?'project-img1':((currentImg===0)?'project-img2':'project-img3'))+' '}></img>
                </div>
                <div className="project-description">
                    <p>Combining my love for music with programming, I can say that at least this project was quite entertaining to make. The apps consists of a simplified version of a music streamer/manager that also integrated events such as shows and festivals in it. This build was particularly challenging because of the media player working in conjunction with the rest of the site in a multi page application. A nice touch was also making all the art in it.</p>
                    <h3 className="project-tools">Tools Used</h3>
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
                            <span className="tool-popup">EJS</span>
                            <img src={require('../Images/ejs.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">Node</span>
                            <img src={require('../Images/node.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">MongoDB/Atlas</span>
                            <img src={require('../Images/mongodb.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                    </div>
                    <a href="https://music-app-inc.herokuapp.com/" className="project-link">View Project</a>
                </div>
            </div>  
            <div className={"project-container scrollbar-hidden scroll-shadow" +((currentProj===3)?' ':' opacity-0 pointer-events-none w-0')}>
                <h3 className="project-name">Social Media App</h3>
                <div className="project-images">
                    <img onClick={()=>{setCurrentImg(0)}} src={social1} alt="project image" className={((currentImg===0)?'project-img1':((currentImg===1)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(1)}} src={social2} alt="project image" className={((currentImg===1)?'project-img1':((currentImg===2)?'project-img2':'project-img3'))+' '}></img>
                    <img onClick={()=>{setCurrentImg(2)}} src={social3} alt="project image" className={((currentImg===2)?'project-img1':((currentImg===0)?'project-img2':'project-img3'))+' '}></img>
                </div>
                <div className="project-description">
                    <p className="">The objective of this project was to create a Mock Social Media App with the basic features you would expect. Such as: user registration, posting, managing profile and app navigation. Designed mainly focused with mobile users in mind it was a challenge to apply a non-relational database in this context which a relational one made more sense. An interesting part of the project was managing the work with a colleague and fellow developer even if for just a few days.</p>
                    <h3 className="project-tools">Tools Used</h3>
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
                            <span className="tool-popup">React</span>
                            <img src={require('../Images/react.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">Node</span>
                            <img src={require('../Images/node.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                        <div className="relative group">
                            <span className="tool-popup">MongoDB/Atlas</span>
                            <img src={require('../Images/mongodb.png')} alt='tech logo' className="tool-logo"></img>
                        </div>
                    </div>
                    <a href="https://social-media-app-front-end-ba.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
                </div>
            </div>      
        </div>
        <div className="h-32 w-full justify-around flex flex-col items-center px-16 bg-stone-200 dark:bg-stone-800 transition-all duration-500 ease-in-out md:px-8">
            <h1 className="text-5xl mx-8 mt-2 w-full text-left">Projects</h1>
            <div ref={scrollRef} className="scrollbar-hidden flex overflow-x-auto py-2 w-full text-left mb-2">
                <button onClick={()=>{setCurrentProj(0)}} className={"project-tag borderLeft "+((currentProj===0)?'border-b':'opacity-50')}>Finance App</button>
                <button onClick={()=>{setCurrentProj(1)}} className={"project-tag borderLeft "+((currentProj===1)?'border-b':'opacity-50')}>Marketplace App</button>
                <button onClick={()=>{setCurrentProj(2)}} className={"project-tag borderLeft "+((currentProj===2)?'border-b':'opacity-50')}>Music App</button>
                <button onClick={()=>{setCurrentProj(3)}} className={"project-tag borderLeft "+((currentProj===3)?'border-b':'opacity-50')}>Social Media App</button>
            </div>
        </div>
    </div>
    )
}

export default Projects;