import { useState, useEffect } from "react";
import useDarkMode from "./Hooks/useDarkMode";
import Navbar from './Components/Navbar';
import Intro from './Pages/Intro';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App =()=> {
  // Varaibles

  // States
  const [darkTheme, setDarkTheme] = useDarkMode();

  const [page, setPage] = useState(0)
  const [intro, setIntro] = useState(true);
  const [introFade, setIntroFade] = useState(true)
  const [DMHighlight, setDMHighlight] = useState(true)

  // On Loads
    useEffect(() => {
      if(intro===true){
        setIntroFade(true)
      }
      const timer = setTimeout(() => {
          setIntro(false);
      }, 6000)

      return () => clearTimeout(timer)
  }, [intro])
  useEffect(() => {
    const timer = setTimeout(() => {
        setIntroFade(false);
    }, 3500)

    return () => clearTimeout(timer)
}, [introFade])

  // Page Functions
    const handleMode = () => {
      setDarkTheme(!darkTheme)
      setDMHighlight(false)
    };

  // HTML Functions

  // Render
  return (
    <div className="flex w-screen h-screen bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-400 transition-all duration-500 ease-in-out
      md:flex-col">
      <Navbar page={page} setPage={setPage} darkTheme={darkTheme} setDarkTheme={setDarkTheme} handleMode={handleMode} setIntro={setIntro} DMHighlight={DMHighlight}/>
      <div className="h-full w-full md:max-h-[calc(100%-64px)] overflow-x-auto overflow-y-auto scrollbar-hidden">
        {(page===0)?<Home page={page} darkTheme={darkTheme}/>:null}
        {(page===1)?<Projects page={page}/>:null}
        {(page===2)?<Resume page={page}/>:null}
        {(page===3)?<Contact page={page} darkTheme={darkTheme}/>:null}
      </div>
      {intro?<Intro darkTheme={darkTheme} intro={intro} introFade={introFade}/>:null}
    </div>
  )
}

export default App;
