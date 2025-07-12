
import { useState } from "react";
import "./App.css";
import dazai from "/src/assets/dazai.jpeg"


function App() {

  const [light, setLight] = useState<boolean>(false)



  function changeTheme() {
    if (light == false) {
      setLight(true)
    } else {
      setLight(false)
    }
  }

  // changeTheme()


  return (
    <div className={light ? "flex flex-col items-center  space-y-20 font-sans tiktok-sans bg-white text-black min-h-[100vh] w-screen" : "flex flex-col items-center  font-sans tiktok-sans bg-black text-white min-h-[100vh] w-screen"}>
      <nav className={light ? "flex mt-5 sticky  bg-white rounded-md text-stone-800 h-13 border-3 border-stone-700  " : "flex mt-5 bg-black sticky  rounded-md text-stone-200 h-13 border-3 border-stone-200 "}>
        <button className="border-r-[3px] h-full flex items-center relative group inline-block">
          <img className="h-12 w-12 animation hover:animate-pulse" src={dazai}></img>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            home
          </div>

          {/* {light? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>} */}
        </button>
        <button className={light ? "border-r-[3px] h-full px-4   relative group inline-block flex items-center transition duration-400 hover:bg-gray-300" : "border-r-[2px] h-full px-4 relative group inline-block  flex items-center transition duration-400 hover:bg-gray-800"}>
          {light ? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#121212"><path d="M13.5 6L10 18.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M13.5 6L10 18.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.5 8.5L3 12L6.5 15.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 8.5L21 12L17.5 15.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max  text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            proof of work
          </div>
        </button>
        <button className={light ? "border-r-[3px] h-full px-4  relative group inline-block flex items-center transition duration-400 hover:bg-gray-300" : "border-r-[2px] h-full px-4 relative group inline-block flex items-center transition duration-400 hover:bg-gray-800"}>
          {light ? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#030303"><path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="#030303" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            contact
          </div>
        </button>
        <button className={light ? "border-r-[3px] h-full px-4  flex items-center  relative group inline-block transition duration-400 hover:bg-gray-300" : "border-r-[2px] h-full px-4  relative group inline-block flex items-center transition duration-400 hover:bg-gray-800"}>

          {light ? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#0d0c0c"><path d="M8 9.76L8.01 9.74889" stroke="#0d0c0c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 6.24992C5.5 3.25001 10.5 3.25 13 6.25001" stroke="#0d0c0c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 8.25003C6.5 6.25 9.5 6.25 11 8.25003" stroke="#0d0c0c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 6.5L18.5 5.5C19.3284 4.67157 20.6716 4.67157 21.5 5.5V5.5C22.3284 6.32843 22.3284 7.67157 21.5 8.5L20.5 9.5M17.5 6.5L6.69591 17.3041C6.56775 17.4322 6.47684 17.5928 6.43288 17.7686L5.5 21.5L9.23128 20.5672C9.40711 20.5232 9.56769 20.4323 9.69585 20.3041L20.5 9.5M17.5 6.5L20.5 9.5" stroke="#0d0c0c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M8 9.76L8.01 9.74889" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 6.24992C5.5 3.25001 10.5 3.25 13 6.25001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 8.25003C6.5 6.25 9.5 6.25 11 8.25003" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5 6.5L18.5 5.5C19.3284 4.67157 20.6716 4.67157 21.5 5.5V5.5C22.3284 6.32843 22.3284 7.67157 21.5 8.5L20.5 9.5M17.5 6.5L6.69591 17.3041C6.56775 17.4322 6.47684 17.5928 6.43288 17.7686L5.5 21.5L9.23128 20.5672C9.40711 20.5232 9.56769 20.4323 9.69585 20.3041L20.5 9.5M17.5 6.5L20.5 9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
         blogs
          </div>
        </button>
        <button className={light ? "border-r-[3px] h-full px-4  relative group inline-block flex items-center transition duration-400 hover:bg-gray-300" : " relative group inline-block border-r-[2px] h-full px-4  flex items-center transition duration-400 hover:bg-gray-800"}>
          {light ? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max  text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          github
          </div>
        </button>
        <button onClick={changeTheme} className=" px-4 h-full relative group inline-block flex items-center animation hover:animate-pulse">
          {light ? <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 18H15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 21H14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.4999 11.5C17.4997 10.5 17.9765 9.48689 17.9999 8C18.0479 4.95029 16 3 11.9999 3C10.8324 3 9.83119 3.16613 8.99988 3.47724" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.99985 15C9 13 8.5 12.5 7.49985 11.5C6.4997 10.5 6.02324 9.48689 5.99985 8C5.99142 7.46458 6.0476 6.96304 6.1676 6.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> : <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M9 18H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 21H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.00082 15C9.00098 13 8.50098 12.5 7.50082 11.5C6.50067 10.5 6.02422 9.48689 6.00082 8C5.95284 4.95029 8.00067 3 12.0008 3C16.001 3 18.0488 4.95029 18.0008 8C17.9774 9.48689 17.5007 10.5 16.5008 11.5C15.501 12.5 15.001 13 15.0008 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max   text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100   pointer-events-none z-10">
          theme
          </div>
        </button>
      </nav>


    </div>
  );
}

export default App;
